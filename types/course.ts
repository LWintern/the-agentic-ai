export interface Module {
  title: string;
  topics: string[];
  icon: JSX.Element;
}

export interface Capsule {
  title: string;
  badge: string;
  duration: string;
  price: string;
  outcome: string;
  modules: Module[];
}

export interface CourseModuleProps {
  capsules: Capsule[];
}
