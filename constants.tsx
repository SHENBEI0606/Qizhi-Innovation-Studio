import { 
  Target, 
  TrendingUp, 
  Scale, 
  Trophy,
  Users,
  FileText,
  Briefcase,
  GitPullRequest,
  ShieldCheck,
  Zap,
  Cpu,
  GraduationCap,
  Layers,
  Rocket,
  Code,
  PenTool,
  Lightbulb,
  Monitor,
  Printer,
  Box,
  Layout
} from 'lucide-react';
import { GoalItem, MechanismStep, DirectionItem, ProjectItem, OrganizationCenter } from './types';

export const APP_INFO = {
  university: "长春师范大学教育学院",
  universityEn: "Changchun Normal University",
  studioName: "启智双创工作室",
  studioNameEn: "QIZHI INNOVATION STUDIO",
  programName: "产教融合 · 校企协同 · 创新孵化",
  programNameEn: "Integration of Industry and Education",
};

// REAL PHOTOGRAPHY ASSETS (Unsplash)
export const IMAGES = {
  // Hero: Real tech student / Lab environment
  hero: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop", 
  
  // Background: Real students collaborating in a library/office (Side view, no distortion)
  background: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  
  // Direction 1: Innovation/Startup meeting (real people, sticky notes)
  directionInnovation: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop",
  
  // Direction 2: Technical/Coding close-up (Hands on keyboard, screen code)
  directionTech: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop",
  
  // Project 1: Real Blue Dashboard UI (Matches "Picture 2" style - Blue Data Screen)
  projectWebsite: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  
  // Project 2: Real Mobile App/Tablet usage
  projectApp: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
};

export const BACKGROUND_CONTENT = {
  title: "工作室简介",
  enTitle: "INTRODUCTION",
  subtitle: "STUDIO PROFILE",
  mainText: "“启智”双创工作室隶属于长春师范大学教育学院，以教育技术学专业为基石，深度融合人工智能技术，致力于打造“产教融合、校企协同”的创新创业孵化平台。",
  subText: "聚焦人工智能技术在教育领域的创新应用，重点支持AI教育工具研发、智能微课/精品课程开发、智慧教学资源/平台搭建、教育类虚拟仿真与数字孪生资源设计、AI赋能教师教育等方向。",
  footerText: "为全校学生提供从技术实践、项目孵化到能力认证、就业推荐的全链条服务。"
};

export const ORGANIZATION_STRUCTURE: OrganizationCenter[] = [
  {
    id: "center-1",
    title: "商务产品中心",
    icon: Briefcase,
    departments: ["市场商务部", "产品策划部", "秘书管理处"],
    color: "bg-teal-500"
  },
  {
    id: "center-2",
    title: "技术培训中心",
    subtitle: "(比赛中心)",
    icon: Cpu,
    departments: ["视频制作", "AI应用", "3D建模", "编程开发"],
    color: "bg-indigo-500"
  },
  {
    id: "center-3",
    title: "项目工作中心",
    icon: Layers,
    departments: ["3D打印工作坊", "视频绘本工作坊", "精品课程工作坊", "系统开发工作组", "教育网站工作组", "机器人研发小队"],
    color: "bg-rose-500"
  },
  {
    id: "center-4",
    title: "创业孵化器",
    icon: Rocket,
    departments: ["创意科技公司", "更多孵化企业..."],
    color: "bg-amber-500"
  }
];

// PDF Page 3: Training Mode (Replacing Goals)
export const TRAINING_CONTENT: GoalItem[] = [
  {
    title: "分层进阶制",
    description: "根据成员基础与目标，设置“入门→进阶→核心→项目负责人”的成长路径，提供阶梯式培养内容。",
    icon: Layers
  },
  {
    title: "项目驱动制",
    description: "核心培养围绕真实项目展开，成员在项目中学习技术、锻炼能力、全面提升。",
    icon: Rocket
  },
  {
    title: "导师双轨制",
    description: "校内导师负责学业指导与技术把关；企业导师提供产业前沿视角、实战经验及市场运营指导。",
    icon: Users
  },
  {
    title: "工作坊与集训",
    description: "定期举办“AI+教育”前沿技术工作坊、项目实战集训营、创新思维训练营。",
    icon: GraduationCap
  }
];

// PDF Page 4: Work Directions
export const DIRECTIONS_CONTENT: DirectionItem[] = [
  {
    title: "创新创业方向",
    description: "师生共研教育项目，大学生创新创业训练计划项目、大学生创新大赛（原互联网+）、计算机软件设计（机器人）大赛等，孵化专利软著。",
    tags: ["大创项目", "互联网+", "专利孵化"],
    icon: Lightbulb,
    image: IMAGES.directionInnovation
  },
  {
    title: "技术项目式学习",
    subtitle: "文创设计、3D打印礼品、录课中心（精品课制作）等业务",
    description: "承接企业技术项目订单，边做边学赚佣金，产教分润，能力证书直达就业。",
    tags: ["企业订单", "产教分润", "技能变现"],
    icon: Code,
    image: IMAGES.directionTech
  }
];

// PDF Page 5: Ongoing Projects
export const PROJECTS_CONTENT: ProjectItem[] = [
  {
    title: "启智AI助力教学网",
    status: "目前在全新改版中",
    description: "人工智能赋能基础教育应用，打造AI赋能教师教育的全新生态。",
    features: ["AI教案生成", "智能微课", "数字人分身"],
    color: "bg-blue-600",
    image: IMAGES.projectWebsite
  },
  {
    title: "智联课本",
    status: "全力开发中",
    description: "智能交互个性化学习，数据驱动未来。基于大数据和人工智能技术的智能教育平台。",
    features: ["3D教材互动", "AI智能助手", "个性化推荐"],
    color: "bg-indigo-600",
    image: IMAGES.projectApp
  }
];

// Mechanism remains from previous prompt context, serves as "How to join/Process"
export const MECHANISM_STEPS: MechanismStep[] = [
  {
    id: "3.1",
    title: "导师项目征集",
    period: "每年11月 - 12月",
    type: 'process',
    details: [
      "导师扫码入库",
      "提交个人基本情况（含项目指导方向和成员需求）"
    ]
  },
  {
    id: "3.2",
    title: "学生自主申报",
    period: "每年11月 - 次年3月",
    type: 'process',
    details: [
      "学生提交项目申报书",
      "工作室组织专家评审",
      "评级分为：优秀、良好、待完善"
    ]
  },
  {
    id: "3.3",
    title: "校企项目导入",
    period: "长期开放",
    type: 'process',
    details: [
      "鼓励合作企业提出实践性项目",
      "工作室统一对接，面向学生开放申请"
    ]
  },
  {
    id: "3.4",
    title: "师生双向选择",
    period: "12月末 - 次年3月",
    type: 'process',
    details: [
      "学生选导师（最多3个，优先级排序）",
      "导师面试匹配",
      "双向沟通确认"
    ]
  },
  {
    id: "3.5",
    title: "公平性保障",
    type: 'policy',
    details: [
      "每位导师最多同时指导 1 个大创项目",
      "每位导师最多同时指导 3 个大赛项目"
    ]
  }
];

export const SECTION_ICONS = {
  mentor: Users,
  student: FileText,
  enterprise: Briefcase,
  selection: GitPullRequest,
  fairness: ShieldCheck
};