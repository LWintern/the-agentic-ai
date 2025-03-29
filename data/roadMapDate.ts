export const roadmapData = [
    // Herotag: "Next cohort starts on April 2nd, 2025 🎉",
    // heading: "Master Data Science & Artificial Intelligence",
    // sortDesc: "Transform your career in a 6 month program.",
    // desc: "Structured learning and a curated community in one membership where you learn to analyse data, build predictive models, and apply AI techniques to solve real-world problems.",
    // link: "http://example.com",
    capsules: [
      // CAPSULE 1
      {
        title: "Foundation in Machine Learning",
        badge: "ML Explorer",
        duration: "8 hrs",
        price: "₹ 999",
        outcome: "Learn the fundamentals of Machine Learning, including data handling, supervised & unsupervised learning, and model evaluation.",
        modules: [
          {
            name: "Introduction to Machine Learning",
            subtopics: [
              {
                name: "What is Machine Learning?",
                items: [
                  "ML vs. Traditional Programming",
                  "Supervised, Unsupervised, and Reinforcement Learning",
                  "Applications of ML",
                  "Healthcare, Finance, E-commerce, and more"
                ]
              },
              {
                name: "Types of Datasets",
                items: [
                  "Structured vs. Unstructured",
                  "Labeled vs. Unlabeled data"
                ]
              },
              {
                name: "ML Lifecycle",
                items: [
                  "Data Collection → Preprocessing → Model Training → Evaluation → Deployment"
                ]
              }
            ]
          },
          {
            name: "Data Preprocessing",
            subtopics: [
              {
                name: "Data Cleaning",
                items: [
                  "Handling missing values (Imputation Techniques)",
                  "Dealing with outliers"
                ]
              },
              {
                name: "Feature Engineering",
                items: [
                  "One-Hot Encoding",
                  "Feature Scaling (Standardization & Normalization)"
                ]
              },
              {
                name: "Splitting Data",
                items: [
                  "Train-test split",
                  "K-Fold Cross-Validation"
                ]
              }
            ]
          },
          {
            name: "Supervised Learning",
            subtopics: [
              {
                name: "Linear Regression",
                items: [
                  "Concepts: Line of best fit, cost function, gradient descent",
                  "Implementation in Python (scikit-learn)"
                ]
              },
              {
                name: "Classification Models",
                items: [
                  "Logistic Regression",
                  "Decision Trees",
                  "Random Forest"
                ]
              },
              {
                name: "Model Evaluation",
                items: [
                  "Accuracy, Precision, Recall, F1-Score",
                  "Confusion Matrix"
                ]
              }
            ]
          },
          {
            name: "Unsupervised Learning",
            subtopics: [
              {
                name: "Clustering",
                items: [
                  "K-means clustering",
                  "Hierarchical clustering"
                ]
              },
              {
                name: "Dimensionality Reduction",
                items: [
                  "Principal Component Analysis (PCA)"
                ]
              },
              {
                name: "Applications",
                items: [
                  "Customer segmentation",
                  "Anomaly detection"
                ]
              }
            ]
          }
        ]
      },
  
      // CAPSULE 2
      {
        title: "Advanced ML Techniques",
        badge: "ML Practitioner",
        duration: "14 hrs",
        price: "₹ 2500",
        outcome: "Gain expertise in hyperparameter tuning, model optimization, and evaluation metrics.",
        modules: [
          {
            name: "Model Evaluation & Validation",
            subtopics: [
              {
                name: "Train-Test Split Review",
                items: []
              },
              {
                name: "Cross-Validation Techniques",
                items: [
                  "K-Fold",
                  "Stratified K-Fold"
                ]
              },
              {
                name: "Model Selection & Validation",
                items: [
                  "Grid Search & Random Search",
                  "Hyperparameter tuning with GridSearchCV"
                ]
              }
            ]
          },
          {
            name: "Feature Engineering & Model Optimization",
            subtopics: [
              {
                name: "Feature Importance",
                items: [
                  "Recursive Feature Elimination (RFE)",
                  "Random Forest Feature Importance"
                ]
              },
              {
                name: "Hyperparameter Tuning",
                items: [
                  "Learning rate optimization",
                  "Regularization techniques"
                ]
              },
              {
                name: "Bias-Variance Tradeoff",
                items: [
                  "Overfitting vs. Underfitting",
                  "Regularization techniques: L1 & L2"
                ]
              }
            ]
          },
          {
            name: "Time-Series Analysis",
            subtopics: [
              {
                name: "Introduction to Time Series",
                items: [
                  "Stationarity & trend analysis",
                  "ARIMA and SARIMA models"
                ]
              },
              {
                name: "Time series forecasting",
                items: []
              }
            ]
          },
          {
            name: "Ensemble Methods",
            subtopics: [
              {
                name: "Bagging & Boosting",
                items: [
                  "Random Forest",
                  "XGBoost & AdaBoost"
                ]
              },
              {
                name: "Model Stacking",
                items: [
                  "Combining multiple models for improved accuracy"
                ]
              }
            ]
          },
          {
            name: "Introduction to Reinforcement Learning (RL)",
            subtopics: [
              {
                name: "Markov Decision Processes (MDPs)",
                items: []
              },
              {
                name: "Q-Learning & Deep Q-Networks (DQN)",
                items: []
              },
              {
                name: "Policy Gradient Methods",
                items: []
              }
            ]
          },
          {
            name: "Bayesian Machine Learning",
            subtopics: [
              {
                name: "Bayesian Networks & Probabilistic Programming",
                items: []
              },
              {
                name: "Uncertainty Estimation in ML Models",
                items: []
              }
            ]
          }
        ]
      },
  
      // CAPSULE 3
      {
        title: "Computer Vision Fundamentals",
        badge: "Vision Novice",
        duration: "8 hrs",
        price: "₹ 1299",
        outcome: "Learn the fundamentals of image processing and CNN basics.",
        modules: [
          {
            name: "Introduction to Computer Vision",
            subtopics: [
              {
                name: "What is Computer Vision?",
                items: [
                  "Applications: Image classification, Object detection"
                ]
              },
              {
                name: "Image Representation",
                items: [
                  "Pixels and color channels (RGB, Grayscale)",
                  "Image matrix representation"
                ]
              }
            ]
          },
          {
            name: "Image Processing with OpenCV",
            subtopics: [
              {
                name: "Basic Image Operations",
                items: [
                  "Resizing, Cropping, Rotating"
                ]
              },
              {
                name: "Filtering Techniques",
                items: [
                  "Blurring, Sharpening",
                  "Edge Detection",
                  "Canny, Sobel, and Laplacian filters"
                ]
              }
            ]
          },
          {
            name: "Introduction to CNNs",
            subtopics: [
              {
                name: "Convolutional Neural Networks",
                items: [
                  "Convolution & Pooling layers",
                  "Activation functions (ReLU, Sigmoid)"
                ]
              },
              {
                name: "Training CNN on MNIST Dataset",
                items: [
                  "Image classification",
                  "Model evaluation"
                ]
              }
            ]
          }
        ]
      },
  
      // CAPSULE 4
      {
        title: "Advanced Computer Vision",
        badge: "Vision Expert",
        duration: "8 hrs",
        price: "₹ 2999",
        outcome: "Gain expertise in Object Detection, Style Transfer, and GANs.",
        modules: [
          {
            name: "Object Detection",
            subtopics: [
              {
                name: "Bounding Boxes",
                items: []
              },
              {
                name: "Popular Detection Models",
                items: [
                  "YOLO",
                  "SSD"
                ]
              },
              {
                name: "Coding Object Detection in Python",
                items: [
                  "OpenCV",
                  "Pre-trained models"
                ]
              }
            ]
          },
          {
            name: "Style Transfer & Image Synthesis",
            subtopics: [
              {
                name: "What is Style Transfer?",
                items: [
                  "Artistic style transfer"
                ]
              },
              {
                name: "Style Transfer with PyTorch",
                items: [
                  "Content and Style separation"
                ]
              },
              {
                name: "Applications",
                items: [
                  "Photo editing, filters"
                ]
              }
            ]
          },
          {
            name: "Generative Models for Computer Vision",
            subtopics: [
              {
                name: "Autoencoders (AEs) & Variational Autoencoders (VAEs)",
                items: []
              },
              {
                name: "GANs",
                items: [
                  "Generating synthetic images",
                  "StyleGAN & CycleGAN"
                ]
              },
              {
                name: "Domain Adaptation",
                items: [
                  "Pix2Pix, CycleGAN"
                ]
              }
            ]
          },
          {
            name: "Self-Supervised Learning in Computer Vision",
            subtopics: [
              {
                name: "Contrastive Learning",
                items: [
                  "SimCLR, MoCo"
                ]
              },
              {
                name: "Masked Image Modeling",
                items: [
                  "MAE, BEiT"
                ]
              },
              {
                name: "Applications in Image Recognition",
                items: []
              }
            ]
          }
        ]
      },
  
      // CAPSULE 5
      {
        title: "NLP Fundamentals",
        badge: "NLP Explorer",
        duration: "12 hrs",
        price: "₹ 1999",
        outcome: "Learn the basics of NLP, including text preprocessing, tokenization, and basic NLP models.",
        modules: [
          {
            name: "Introduction to NLP",
            subtopics: [
              {
                name: "What is NLP?",
                items: [
                  "Applications: Sentiment analysis, machine translation, text generation"
                ]
              },
              {
                name: "Text Representation",
                items: [
                  "Bag of Words (BoW)",
                  "TF-IDF (Term Frequency - Inverse Document Frequency)"
                ]
              },
              {
                name: "NLP Libraries",
                items: [
                  "NLTK",
                  "SpaCy"
                ]
              }
            ]
          },
          {
            name: "Text Preprocessing",
            subtopics: [
              {
                name: "Tokenization",
                items: [
                  "Sentence and word tokenization"
                ]
              },
              {
                name: "Stopword Removal",
                items: []
              },
              {
                name: "Stemming & Lemmatization",
                items: [
                  "Porter & Snowball stemmers"
                ]
              },
              {
                name: "Text Cleaning",
                items: [
                  "Punctuation removal, case normalization"
                ]
              }
            ]
          },
          {
            name: "Text Classification",
            subtopics: [
              {
                name: "Naive Bayes Classifier",
                items: [
                  "Sentiment analysis"
                ]
              },
              {
                name: "Logistic Regression for NLP",
                items: []
              },
              {
                name: "TF-IDF + ML Pipeline",
                items: [
                  "Text classification pipeline with TF-IDF and logistic regression"
                ]
              }
            ]
          },
          {
            name: "Basic NLP Models",
            subtopics: [
              {
                name: "Word Embeddings",
                items: [
                  "Word2Vec",
                  "GloVe"
                ]
              },
              {
                name: "Named Entity Recognition (NER)",
                items: [
                  "Using SpaCy for NER",
                  "Entity tagging"
                ]
              }
            ]
          },
          {
            name: "Audio & Speech Processing",
            subtopics: [
              {
                name: "MFCC, Spectrograms, Feature Extraction",
                items: []
              },
              {
                name: "Speech-to-Text Models",
                items: [
                  "Whisper, DeepSpeech"
                ]
              },
              {
                name: "NLP for Audio (ASR Systems)",
                items: []
              }
            ]
          }
        ]
      },
  
      // CAPSULE 6
      {
        title: "Advanced NLP Techniques",
        badge: "NLP Specialist",
        duration: "12 hrs",
        price: "₹ 2999",
        outcome: "Gain expertise in advanced NLP techniques, transformers, and language models.",
        modules: [
          {
            name: "Advanced NLP Models",
            subtopics: [
              {
                name: "Recurrent Neural Networks (RNN)",
                items: [
                  "Sequence modeling",
                  "LSTM & GRU",
                  "Memory-based NLP models",
                  "Bi-LSTM",
                  "Improved sequence processing"
                ]
              }
            ]
          },
          {
            name: "Transformer Models",
            subtopics: [
              {
                name: "What are Transformers?",
                items: [
                  "Self-attention mechanism",
                  "Encoder-Decoder architecture"
                ]
              },
              {
                name: "Popular Transformer Models",
                items: [
                  "BERT",
                  "GPT-2 and GPT-3"
                ]
              },
              {
                name: "Hugging Face Library",
                items: [
                  "Fine-tuning pre-trained transformer models"
                ]
              }
            ]
          },
          {
            name: "Text Generation",
            subtopics: [
              {
                name: "Text Summarization",
                items: [
                  "Abstractive and Extractive methods"
                ]
              },
              {
                name: "Text Generation with GPT",
                items: [
                  "Prompt engineering"
                ]
              },
              {
                name: "Language Translation",
                items: [
                  "Seq2Seq models"
                ]
              }
            ]
          },
          {
            name: "NLP Pipelines",
            subtopics: [
              {
                name: "Sentiment Analysis Pipeline",
                items: []
              },
              {
                name: "Text Classification with Transformers",
                items: []
              },
              {
                name: "Custom NER Pipeline",
                items: []
              }
            ]
          },
          {
            name: "Graph Neural Networks (GNNs) for NLP",
            subtopics: [
              {
                name: "Introduction to Graph-Based Learning",
                items: []
              },
              {
                name: "Graph Convolutional Networks (GCN)",
                items: []
              },
              {
                name: "Applications in Knowledge Graphs & NLP",
                items: []
              }
            ]
          }
        ]
      },
  
      // CAPSULE 7
      {
        title: "Generative AI Basics",
        badge: "GenAI Innovator",
        duration: "8 hrs",
        price: "₹ 1999",
        outcome: "Learn the fundamentals of Generative AI with basic generative models.",
        modules: [
          {
            name: "Introduction to Generative AI",
            subtopics: [
              {
                name: "What is Generative AI?",
                items: [
                  "Difference between Discriminative and Generative models",
                  "Applications",
                  "Image generation, text generation, music synthesis",
                  "GANs vs. VAEs",
                  "Difference and use cases"
                ]
              }
            ]
          },
          {
            name: "Autoencoders & Variational Autoencoders",
            subtopics: [
              {
                name: "Autoencoder Architecture",
                items: [
                  "Encoder-Decoder architecture"
                ]
              },
              {
                name: "Variational Autoencoders (VAEs)",
                items: [
                  "Latent space representation"
                ]
              },
              {
                name: "Applications",
                items: [
                  "Image reconstruction, anomaly detection"
                ]
              }
            ]
          },
          {
            name: "Introduction to GANs",
            subtopics: [
              {
                name: "Generative Adversarial Networks",
                items: [
                  "Generator & Discriminator",
                  "Training Process",
                  "Loss functions and convergence"
                ]
              },
              {
                name: "Simple GANs",
                items: [
                  "Image synthesis"
                ]
              }
            ]
          },
          {
            name: "Self-Supervised Learning for Generative AI",
            subtopics: [
              {
                name: "BERT-style Masked Modeling for Text & Images",
                items: []
              },
              {
                name: "SimCLR and Contrastive Learning in Generative AI",
                items: []
              }
            ]
          }
        ]
      },
  
      // CAPSULE 8
      {
        title: "Advanced Generative AI Models",
        badge: "GenAI Master",
        duration: "8 hrs",
        price: "₹ 2999",
        outcome: "Master advanced generative AI models, including transformers and diffusion models.",
        modules: [
          {
            name: "Diffusion Models",
            subtopics: [
              {
                name: "What is Diffusion?",
                items: [
                  "Noising and denoising process"
                ]
              },
              {
                name: "Stable Diffusion",
                items: [
                  "Image generation"
                ]
              },
              {
                name: "Text-to-Image Diffusion",
                items: [
                  "Generating images from text prompts"
                ]
              }
            ]
          },
          {
            name: "Large Language Models (LLMs)",
            subtopics: [
              {
                name: "GPT-3 & GPT-4",
                items: [
                  "Fine-tuning",
                  "Prompt engineering"
                ]
              },
              {
                name: "ChatGPT & Gemini",
                items: [
                  "Building custom chat applications"
                ]
              },
              {
                name: "Code Generation Models",
                items: [
                  "Codex & CodeGen"
                ]
              }
            ]
          },
          {
            name: "Text-to-Image & Text-to-Video",
            subtopics: [
              {
                name: "Text-to-Image Pipelines",
                items: [
                  "Using DALL-E and Stable Diffusion"
                ]
              },
              {
                name: "Text-to-Video Generation",
                items: [
                  "Synthesizing video clips from text prompts"
                ]
              }
            ]
          },
          {
            name: "Meta-Learning & Few-Shot Learning",
            subtopics: [
              {
                name: "Model-Agnostic Meta-Learning (MAML)",
                items: []
              },
              {
                name: "Few-Shot & Zero-Shot Learning in LLMs",
                items: []
              }
            ]
          }
        ]
      },
  
      // CAPSULE 9
      {
        title: "Agentic AI Basics",
        badge: "Agentic AI Explorer",
        duration: "12 hrs",
        price: "₹ 2400",
        outcome: "Learn the fundamentals of Agentic AI, including creating simple agents with memory, basic planning models, and task execution.",
        modules: [
          {
            name: "Introduction to Agentic AI",
            subtopics: [
              {
                name: "What is Agentic AI?",
                items: [
                  "Definition and characteristics of autonomous agents",
                  "Difference between traditional AI and Agentic AI"
                ]
              },
              {
                name: "Applications of Agentic AI",
                items: [
                  "Autonomous task execution (e.g., AutoGPT)",
                  "AI-powered personal assistants",
                  "Automated research agents"
                ]
              }
            ]
          },
          {
            name: "LangChain Basics",
            subtopics: [
              {
                name: "Introduction to LangChain",
                items: [
                  "What is LangChain?",
                  "Key components: Chains, Memory, Agents"
                ]
              },
              {
                name: "Building Simple Agents",
                items: [
                  "Creating a basic agent",
                  "Adding memory for context awareness"
                ]
              },
              {
                name: "Data Flow in LangChain",
                items: [
                  "How LangChain handles input, output, and agent interactions"
                ]
              }
            ]
          },
          {
            name: "Memory & Persistence",
            subtopics: [
              {
                name: "Agent Memory Types",
                items: [
                  "Short-term memory (Session-based)",
                  "Long-term memory (Vector databases)"
                ]
              },
              {
                name: "Memory Management",
                items: [
                  "Storing conversation history",
                  "Using embeddings for context recall"
                ]
              }
            ]
          },
          {
            name: "Basic Planning Models",
            subtopics: [
              {
                name: "What is Planning in AI?",
                items: [
                  "Planning vs. reasoning"
                ]
              },
              {
                name: "Simple Planning Models",
                items: [
                  "Goal-oriented planning",
                  "Decision trees for task execution"
                ]
              },
              {
                name: "Implementing Basic Planners",
                items: [
                  "Using LangChain's planner module"
                ]
              }
            ]
          }
        ]
      },
  
      // CAPSULE 10
      {
        title: "Advanced Agentic AI & AutoGPT",
        badge: "Agentic AI Specialist",
        duration: "8 hrs",
        price: "₹ 2999",
        outcome: "Master advanced Agentic AI techniques, including autonomous reasoning, task chaining, and AutoGPT workflows.",
        modules: [
          {
            name: "Autonomous Reasoning with Agents",
            subtopics: [
              {
                name: "Agentic Reasoning",
                items: [
                  "Decision-making capabilities of autonomous agents"
                ]
              },
              {
                name: "Tools for Reasoning",
                items: [
                  "LangChain ReAct (Reason + Act) pattern"
                ]
              },
              {
                name: "Multi-Agent Collaboration",
                items: [
                  "Coordinating multiple agents for complex workflows"
                ]
              }
            ]
          },
          {
            name: "AutoGPT & BabyAGI",
            subtopics: [
              {
                name: "Introduction to AutoGPT",
                items: [
                  "What is AutoGPT?",
                  "How it uses GPT for autonomous task execution"
                ]
              },
              {
                name: "BabyAGI Framework",
                items: [
                  "Using BabyAGI for iterative task management"
                ]
              },
              {
                name: "Task Decomposition",
                items: [
                  "Splitting complex tasks into smaller, manageable subtasks"
                ]
              }
            ]
          },
          {
            name: "Task Chaining & Advanced Memory",
            subtopics: [
              {
                name: "Chained Agent Pipelines",
                items: [
                  "Multi-step workflows with agents"
                ]
              },
              {
                name: "Vector Database for Long-Term Memory",
                items: [
                  "Using Pinecone, Weaviate, or ChromaDB"
                ]
              },
              {
                name: "Persistent Memory in Agents",
                items: [
                  "Storing and recalling task history"
                ]
              }
            ]
          },
          {
            name: "Real-World Applications of Agentic AI",
            subtopics: [
              {
                name: "Automated Research Agents",
                items: [
                  "Continuous web research"
                ]
              },
              {
                name: "Autonomous Code Generators",
                items: [
                  "AutoGPT for code generation"
                ]
              },
              {
                name: "AI-Powered Data Analysts",
                items: [
                  "Agents for data processing and visualization"
                ]
              }
            ]
          }
        ]
      },
  
      // CAPSULE 11
      {
        title: "MLOps & Model Deployment",
        badge: "AI Ops Specialist",
        duration: "15 hrs",
        price: "₹ 12999",
        outcome: "Gain expertise in deploying AI models with Docker, Kubernetes, and CI/CD pipelines.",
        modules: [
          {
            name: "Introduction to MLOps",
            subtopics: [
              {
                name: "What is MLOps?",
                items: [
                  "Importance of MLOps for AI lifecycle",
                  "Difference between DevOps and MLOps"
                ]
              },
              {
                name: "Components of MLOps",
                items: [
                  "Model versioning",
                  "CI/CD pipelines for AI",
                  "Monitoring and retraining"
                ]
              }
            ]
          },
          {
            name: "Model Deployment with Docker",
            subtopics: [
              {
                name: "Containerizing AI Models",
                items: [
                  "Building Docker images for ML models"
                ]
              },
              {
                name: "Deploying with Docker Compose",
                items: [
                  "Scaling AI models with Docker Compose"
                ]
              },
              {
                name: "Model Serving",
                items: [
                  "Using Flask/FastAPI for API endpoints"
                ]
              }
            ]
          },
          {
            name: "Kubernetes for AI Deployment",
            subtopics: [
              {
                name: "Introduction to Kubernetes",
                items: [
                  "Pods, Deployments, and Services"
                ]
              },
              {
                name: "AI Model Scaling with K8s",
                items: [
                  "Horizontal Pod Autoscaling (HPA)"
                ]
              },
              {
                name: "Kubernetes Ingress & Load Balancing",
                items: [
                  "Exposing model APIs externally"
                ]
              },
              {
                name: "Persistent Storage for AI",
                items: [
                  "Using volumes for model artifacts"
                ]
              }
            ]
          },
          {
            name: "Continuous Integration & Deployment (CI/CD)",
            subtopics: [
              {
                name: "CI/CD Pipelines for AI",
                items: [
                  "Automating deployment with GitHub Actions"
                ]
              },
              {
                name: "Version Control & Rollbacks",
                items: [
                  "Model versioning with Git"
                ]
              },
              {
                name: "Model Retraining",
                items: [
                  "Automating retraining pipelines"
                ]
              }
            ]
          }
        ]
      },
  
      // CAPSULE 12
      {
        title: "Cloud & DevOps Integration",
        badge: "AI Cloud Master",
        duration: "14 hrs",
        price: "₹ 9999",
        outcome: "Learn cloud-based MLOps with AWS Cloud.",
        modules: [
          {
            name: "Cloud Platforms for AI",
            subtopics: [
              {
                name: "Introduction to Cloud AI Services",
                items: [
                  "AWS Sagemaker"
                ]
              },
              {
                name: "Model Deployment on Cloud",
                items: [
                  "Deploying models on cloud servers"
                ]
              },
              {
                name: "Cloud Storage for AI Artifacts",
                items: [
                  "Using S3, and Block storage"
                ]
              }
            ]
          },
          {
            name: "Infrastructure as Code (IaC)",
            subtopics: [
              {
                name: "Terraform for Cloud AI",
                items: [
                  "Automating cloud infrastructure"
                ]
              },
              {
                name: "CloudFormation & Deployment Scripts",
                items: [
                  "Infrastructure deployment pipelines"
                ]
              }
            ]
          },
          {
            name: "AI Model Monitoring",
            subtopics: [
              {
                name: "Prometheus & Grafana for AI",
                items: [
                  "Real-time monitoring of AI pipelines"
                ]
              },
              {
                name: "Model Drift Detection",
                items: [
                  "Retraining triggers"
                ]
              },
              {
                name: "Anomaly Detection",
                items: [
                  "Real-time anomaly monitoring"
                ]
              }
            ]
          },
          {
            name: "Federated Learning & Privacy-Preserving AI",
            subtopics: [
              {
                name: "Training Across Distributed Devices",
                items: []
              },
              {
                name: "Privacy-Preserving Machine Learning Techniques",
                items: []
              }
            ]
          },
          {
            name: "Edge AI & TinyML",
            subtopics: [
              {
                name: "Deploying ML Models on Low-Power Devices",
                items: []
              },
              {
                name: "TensorFlow Lite & Edge Impulse for IoT AI",
                items: []
              }
            ]
          }
        ]
      }
    ]
];