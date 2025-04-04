"use client"
import React from 'react';
import { ChevronRight } from 'lucide-react';

// Define types
interface Capsule {
  name: string;
  outcome: string[] | string;
  badge: string;
  icon: string;
}

interface ModuleData {
  level: number;
  title: string;
  capsules: Capsule[];
}

interface CapsuleCardProps {
  capsule: Capsule;
  level: number;
}

interface ModuleSectionProps {
  moduleData: ModuleData;
}

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
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-md ${iconBgColor} flex items-center justify-center text-lg`}>
            {capsule.icon}
          </div>
          <h3 className="text-md font-medium text-white">{capsule.name}</h3>
        </div>
        <div className="text-xs text-gray-400">{capsule.badge}</div>
      </div>
      <p className="text-sm text-gray-400 flex-grow mt-2">
        {Array.isArray(capsule.outcome) ? capsule.outcome.join(', ') : capsule.outcome}
      </p>
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
 
  const roadmapData: ModuleData[] = [
    {
      level: 1,
      title: "AI Model Deployment & Scalability",
      capsules: [
        {
          name: "MCP Servers",
          outcome: [
            "Deploying and managing AI microservices efficiently"
          ],
          badge: "Agentic AI Specialist",
          icon: "🖥️"
        },
        {
          name: "Deployment on AWS",
          outcome: [
            "Hosting AI applications on a scalable cloud infrastructure"
          ],
          badge: "Agentic AI Specialist",
          icon: "☁️"
        },
        {
          name: "Flash Attention",
          outcome: [
            "Scaling agents bottlenecked by the self-attention mechanism"
          ],
          badge: "Agentic AI Specialist",
          icon: "⚡"
        },
        {
          name: "Multi-head Attention",
          outcome: [
            "Enhancing agent focus on different parts of input sequences simultaneously"
          ],
          badge: "Agentic AI Specialist",
          icon: "👀"
        }
      ]
    },
    {
      level: 2,
      title: "AI Safety & Customization",
      capsules: [
        {
          name: "Guardrails for AI Models",
          outcome: [
            "Implementing prompt filtering, PII detection, and safety mechanisms"
          ],
          badge: "Agentic AI Specialist",
          icon: "🛡️"
        },
        {
          name: "Model Fine-Tuning",
          outcome: [
            "Customizing pre-trained LLMs for specific use cases"
          ],
          badge: "Agentic AI Specialist",
          icon: "🎛️"
        },
        {
          name: "STF (Fine-Tuning for Distill Use Case)",
          outcome: [
            "Fine-tuning open-source LLMs for distillation tasks"
          ],
          badge: "Agentic AI Specialist",
          icon: "🧪"
        },
        {
          name: "LoRA Layers",
          outcome: [
            "Adding custom Low-Rank Adaptation (LoRA) layers to LLMs"
          ],
          badge: "Agentic AI Specialist",
          icon: "📊"
        },
        {
          name: "Multi-LoRA Setup",
          outcome: [
            "Deploying multi-LoRA LLMs with dynamic routing"
          ],
          badge: "Agentic AI Specialist",
          icon: "🔄"
        }
      ]
    },
    {
      level: 3,
      title: "Advanced AI Evaluation & Retrieval",
      capsules: [
        {
          name: "LLM as a Judge Technique",
          outcome: [
            "Evaluating AI-generated responses using AI"
          ],
          badge: "Agentic AI Specialist",
          icon: "⚖️"
        },
        {
          name: "Perplexity Sonar API",
          outcome: [
            "Enhancing AI reliability and accuracy"
          ],
          badge: "Agentic AI Specialist",
          icon: "📈"
        },
        {
          name: "Cypher Query Context Retrieval",
          outcome: [
            "Enhancing LLM capabilities with Neo4j Graph DB"
          ],
          badge: "Agentic AI Specialist",
          icon: "🗂️"
        }
      ]
    },
    {
      level: 4,
      title: "Core AI Architectures & Memory",
      capsules: [
        {
          name: "Transformer Architecture",
          outcome: [
            `Understanding the "Attention Is All You Need" white paper`
          ],
          badge: "Agentic AI Specialist",
          icon: "🏗️"
        },
        {
          name: "LSTM (Long Short-Term Memory)",
          outcome: [
            "Traditional sequential memory for AI models"
          ],
          badge: "Agentic AI Specialist",
          icon: "🧠"
        }
      ]
    }
  ];

  return (
    <div className="bg-black text-white h-full p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">View our curriculum</h1>
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            The entire program leads to mastery in the field and is intended to give future practitioners a complete curriculum.
          </p>
        </div>
        <div className="space-y-8">
          {roadmapData.map((module) => (
            <ModuleSection key={module.level} moduleData={module} />
          ))}
        </div>

     
 {/* Call to action button */}
 <div className="mt-12 flex justify-center">
          <a 
            href="https://rzp.io/rzp/2SOJBNi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            {/* todo remove blink animation in the button */}
            <button
  className="w-auto py-3 px-4 border-none bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity text-white"
>
  🚀 Book Your Seat Now
</button>
          </a>
        </div>
    
      </div>
    </div>
  );
};

export default AIRoadmap;