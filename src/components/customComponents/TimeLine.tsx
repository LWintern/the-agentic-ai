import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const roadmapData = [
    {
      level: "Level 1",
      capsules: [
        {
          name: "Foundation in Machine Learning",
          outcome: "ML fundamentals, data handling, and model training",
          badge: "ML Explorer",
          images: [
            "https://via.placeholder.com/500",
            "https://via.placeholder.com/500",
          ],
        },
        {
          name: "Advanced ML Techniques",
          outcome: "Hyperparameter tuning, EDA, evaluation metrics",
          badge: "ML Practitioner",
          images: [
            "https://via.placeholder.com/500",
            "https://via.placeholder.com/500",
          ],
        },
        {
          name: "Deep Learning with Neural Networks",
          outcome: "CNNs, RNNs, and LSTMs",
          badge: "Deep Learning Pro",
          images: [
            "https://via.placeholder.com/500",
            "https://via.placeholder.com/500",
          ],
        },
      ],
    },
    {
      level: "Level 2",
      capsules: [
        {
          name: "Computer Vision Fundamentals",
          outcome: "Image processing, CNNs, OpenCV",
          badge: "Vision Novice",
          images: [
            "https://via.placeholder.com/500",
            "https://via.placeholder.com/500",
          ],
        },
        {
          name: "Advanced Computer Vision",
          outcome: "Object detection, GANs, Style Transfer",
          badge: "Vision Expert",
          images: [
            "https://via.placeholder.com/500",
            "https://via.placeholder.com/500",
          ],
        },
      ],
    },
    {
      level: "Level 3",
      capsules: [
        {
          name: "NLP Fundamentals",
          outcome: "Text processing, tokenization, NER",
          badge: "NLP Explorer",
          images: [
            "https://via.placeholder.com/500",
            "https://via.placeholder.com/500",
          ],
        },
        {
          name: "Advanced NLP Techniques",
          outcome: "LLMs, Transformers, LangChain",
          badge: "NLP Specialist",
          images: [
            "https://via.placeholder.com/500",
            "https://via.placeholder.com/500",
          ],
        },
      ],
    },
    {
      level: "Level 4",
      capsules: [
        {
          name: "Generative AI Basics",
          outcome: "GANs, VAEs, and StyleGAN",
          badge: "GenAI Innovator",
          images: [
            "https://via.placeholder.com/500",
            "https://via.placeholder.com/500",
          ],
        },
        {
          name: "Advanced Generative Models",
          outcome: "Prompt engineering, Pix2Pix, CycleGAN",
          badge: "GenAI Master",
          images: [
            "https://via.placeholder.com/500",
            "https://via.placeholder.com/500",
          ],
        },
      ],
    },
    {
      level: "Level 5",
      capsules: [
        {
          name: "Agentic AI & Autonomous Systems",
          outcome: "Agents, LLM integration, autonomy",
          badge: "Agentic AI Explorer",
          images: [
            "https://via.placeholder.com/500",
            "https://via.placeholder.com/500",
          ],
        },
        {
          name: "Advanced Agentic AI",
          outcome: "Multi-agent systems, fine-tuning",
          badge: "Agentic AI Architect",
          images: [
            "https://via.placeholder.com/500",
            "https://via.placeholder.com/500",
          ],
        },
      ],
    },
    {
      level: "Level 6",
      capsules: [
        {
          name: "AI Ops & MLOps",
          outcome: "Model deployment, DevOps, CI/CD",
          badge: "AI Ops Specialist",
          images: [
            "https://via.placeholder.com/500",
            "https://via.placeholder.com/500",
          ],
        },
        {
          name: "Cloud & MLOps Integration",
          outcome: "AWS, Docker, Kubernetes, OpenShift",
          badge: "Cloud AI Engineer",
          images: [
            "https://via.placeholder.com/500",
            "https://via.placeholder.com/500",
          ],
        },
      ],
    },
    {
      level: "Completion",
      capsules: [
        {
          name: "Completion",
          outcome: "After completing all levels",
          badge: "AI Master Practitioner",
          images: [
            "https://via.placeholder.com/500",
            "https://via.placeholder.com/500",
          ],
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      <Timeline
        data={roadmapData.map((levelData) => ({
          title: levelData.level,
          content: (
            <div className="mb-8">
              {levelData.capsules.map((capsule, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {index + 1}. Capsule Name: {capsule.name}
                  </h3>
                  <p className="text-md md:text-lg font-medium mb-2">
                    Key Outcome: {capsule.outcome}
                  </p>
                  <p className="text-md md:text-lg font-medium mb-4">
                    Badge Name: {capsule.badge}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {capsule.images.map((image, imgIndex) => (
                      <Image
                        key={imgIndex}
                        src={image}
                        alt={capsule.name}
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-40 md:h-60 w-full shadow-lg"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ),
        }))}
      />
    </div>
  );
}