
"use client"
import React from 'react';
import { ChevronRight } from 'lucide-react';

// Define types
type Capsule = {
  name: string;
  outcome: string;
  badge: string;
  icon: string;
};

type Module = {
  level: number;
  title: string;
  capsules: Capsule[];
};

type RoadmapData = Module[];

type CapsuleCardProps = {
  capsule: Capsule;
  level: number;
};

type ModuleSectionProps = {
  moduleData: Module;
};

// Utility functions
const getLevelColor = (level: number): string => {
  const colors: Record<number, string> = {
    1: "bg-purple-500",
    2: "bg-blue-500",
    3: "bg-pink-500",
    4: "bg-green-500",
    5: "bg-orange-500",
    6: "bg-red-500",
  };
  return colors[level] || "bg-gray-500";
};

const getIconBgColor = (level: number): string => {
  const colors: Record<number, string> = {
    1: "bg-purple-900/40",
    2: "bg-blue-900/40",
    3: "bg-pink-900/40",
    4: "bg-green-900/40",
    5: "bg-orange-900/40",
    6: "bg-red-900/40",
  };
  return colors[level] || "bg-gray-900/40";
};

// Components
const CapsuleCard: React.FC<CapsuleCardProps> = ({ capsule, level }) => {
  const iconBgColor = getIconBgColor(level);

  return (
    <div className="rounded-xl bg-gray-900/60 p-5 transition-all hover:bg-gray-800/70 border border-gray-800 flex flex-col">
      <div className="flex items-start justify-between mb-2">
        <div className={`w-8 h-8 rounded-md ${iconBgColor} flex items-center justify-center text-lg`}>
          {capsule.icon}
        </div>
        <div className="text-xs text-gray-400">{capsule.badge}</div>
      </div>
      <h3 className="text-md font-medium text-white mt-2 mb-1">{capsule.name}</h3>
      <p className="text-sm text-gray-400 flex-grow">{capsule.outcome}</p>
    </div>
  );
};

const ModuleSection: React.FC<ModuleSectionProps> = ({ moduleData }) => {
  const levelColor = getLevelColor(moduleData.level);

  return (
    <div className="mb-12">
      <div className="flex items-center mb-3">
        <div className={`w-4 h-4 rotate-45 ${levelColor} mr-2`}></div>
        <span className="text-xs text-gray-400">Module {moduleData.level}</span>
      </div>
      <h2 className="text-xl font-semibold text-white mb-6">{moduleData.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {moduleData.capsules.map((capsule, index) => (
          <CapsuleCard key={index} capsule={capsule} level={moduleData.level} />
        ))}
      </div>
    </div>
  );
};

const AIRoadmap: React.FC = () => {
    const roadmapData = [
        {
          level: 1,
          title: "Foundation in ML & Deep Learning",
          capsules: [
            {
              name: "Foundation in Machine Learning",
              outcome: "ML fundamentals, data handling, and model training",
              badge: "ML Explorer",
              icon: "🔮" // Placeholder icons
            },
            {
              name: "Advanced ML Techniques",
              outcome: "Hyperparameter tuning, EDA, evaluation metrics",
              badge: "ML Practitioner",
              icon: "📊"
            },
            {
              name: "Deep Learning with Neural Networks",
              outcome: "CNNs, RNNs, and LSTMs",
              badge: "Deep Learning Pro",
              icon: "🧠"
            }
          ]
        },
        {
          level: 2,
          title: "Computer Vision",
          capsules: [
            {
              name: "Computer Vision Fundamentals",
              outcome: "Image processing, CNNs, OpenCV",
              badge: "Vision Novice",
              icon: "👁️"
            },
            {
              name: "Advanced Computer Vision",
              outcome: "Object detection, GANs, Style Transfer",
              badge: "Vision Expert",
              icon: "🔍"
            }
          ]
        },
        {
          level: 3,
          title: "Natural Language Processing",
          capsules: [
            {
              name: "NLP Fundamentals",
              outcome: "Text processing, tokenization, NER",
              badge: "NLP Explorer",
              icon: "📝"
            },
            {
              name: "Advanced NLP Techniques",
              outcome: "LLMs, Transformers, LangChain",
              badge: "NLP Specialist",
              icon: "🔤"
            }
          ]
        },
        {
          level: 4,
          title: "Generative AI",
          capsules: [
            {
              name: "Generative AI Basics",
              outcome: "GANs, VAEs, and StyleGAN",
              badge: "GenAI Innovator",
              icon: "🎨"
            },
            {
              name: "Advanced Generative Models",
              outcome: "Prompt engineering, Pix2Pix, CycleGAN",
              badge: "GenAI Master",
              icon: "✨"
            }
          ]
        },
        {
          level: 5,
          title: "Agentic AI & Autonomous Systems",
          capsules: [
            {
              name: "Agentic AI & Autonomous Systems",
              outcome: "Agents, LLM integration, autonomy",
              badge: "Agentic AI Explorer",
              icon: "🤖"
            },
            {
              name: "Advanced Agentic AI",
              outcome: "Multi-agent systems, fine-tuning",
              badge: "Agentic AI Architect",
              icon: "⚙️"
            }
          ]
        },
        {
          level: 6,
          title: "AI Ops & MLOps",
          capsules: [
            {
              name: "AI Ops & MLOps",
              outcome: "Model deployment, DevOps, CI/CD",
              badge: "AI Ops Specialist",
              icon: "🔄"
            },
            {
              name: "Cloud & MLOps Integration",
              outcome: "AWS, Docker, Kubernetes, OpenShift",
              badge: "Cloud AI Engineer",
              icon: "☁️"
            }
          ]
        }
      ];
      

  return (
    <div className="bg-black text-white h-full p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-2">View our curriculum</h1>
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            The entire program leads to mastery in the field and is intended to give future practitioners a complete curriculum.
          </p>
        </div>

        <div className="space-y-8">
          {roadmapData.map((module) => (
            <ModuleSection key={module.level} moduleData={module} />
          ))}
        </div>

        <div className="mt-12 p-6 border border-gray-800 rounded-xl text-center bg-gradient-to-b from-gray-900/40 to-gray-900/10">
          <h3 className="text-xl font-bold mb-2">AI Master Practitioner</h3>
          <p className="text-sm text-gray-400">Complete all levels to achieve the ultimate certification</p>
          <button className="mt-4 px-4 py-2 bg-white text-black rounded-md font-medium flex items-center mx-auto hover:bg-gray-200 transition-colors">
            Start your journey
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIRoadmap;