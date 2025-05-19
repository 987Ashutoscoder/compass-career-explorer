
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  DollarSign, 
  Briefcase, 
  Heart, 
  GraduationCap, 
  TrendingUp, 
  Clock, 
  Check, 
  Building, 
  Globe, 
  ArrowLeft 
} from "lucide-react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

// Sample career data (expanded with more details)
const careerData = [
  {
    id: 1,
    title: "Software Developer",
    description: "Design, build, and maintain software applications using various programming languages and frameworks.",
    longDescription: "Software developers create computer applications that allow users to do specific tasks and the underlying systems that run the devices or control networks. They analyze users' needs, design, test, and develop software to meet those needs. Software developers need strong problem-solving abilities, excellent coding skills, and a deep understanding of algorithms and data structures.",
    category: "Technical",
    salary: "$70,000 - $120,000",
    growth: "High",
    education: "Bachelor's in CS or equivalent",
    skills: ["JavaScript", "Python", "Problem-solving", "Teamwork", "Git", "Database Management"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    roadmap: [
      "Learn core programming languages (Python, JavaScript, Java)",
      "Build personal projects to develop a portfolio",
      "Learn frameworks and tools specific to your area of interest",
      "Internship or entry-level position",
      "Specialize in a specific area (web, mobile, AI, etc.)",
      "Continue learning and staying updated with technologies",
      "Move to senior or specialized roles"
    ],
    topColleges: [
      "Massachusetts Institute of Technology",
      "Stanford University",
      "Carnegie Mellon University",
      "University of California, Berkeley",
      "Georgia Institute of Technology"
    ],
    recommendedCourses: [
      {
        title: "Computer Science 101",
        provider: "University Program",
        duration: "4 years",
        type: "Degree"
      },
      {
        title: "Full-Stack Web Development Bootcamp",
        provider: "Coding Bootcamp",
        duration: "14 weeks",
        type: "Bootcamp"
      },
      {
        title: "Python for Everybody",
        provider: "Coursera",
        duration: "3 months",
        type: "Online Course"
      }
    ],
    jobOutlook: "The job outlook for software developers is excellent, with much faster than average growth projected over the next decade. As technology continues to evolve and businesses increasingly rely on digital solutions, the demand for skilled developers is expected to remain high across industries."
  },
  {
    id: 2,
    title: "UX/UI Designer",
    description: "Create user-friendly interfaces with a focus on enhancing user experience through research and design principles.",
    longDescription: "UX/UI Designers focus on creating meaningful and relevant experiences for users. They research user behaviors and motivations, design intuitive interfaces, and test designs to ensure they meet user needs. UX designers focus on the overall feel of the experience, while UI designers focus on how the product's interfaces look and function. This role combines creativity with technical skills and a deep understanding of user psychology.",
    category: "Creative",
    salary: "$65,000 - $110,000",
    growth: "Medium-High",
    education: "Design degree or certification",
    skills: ["Figma", "User Research", "Visual Design", "Prototyping", "Adobe Creative Suite", "Information Architecture"],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    roadmap: [
      "Learn design fundamentals and principles",
      "Master design tools (Figma, Sketch, Adobe XD)",
      "Build a portfolio of projects (real or concept)",
      "Learn about user research and testing methodologies",
      "Gain understanding of front-end development basics",
      "Internship or junior design position",
      "Specialize in UX research, UI design, or interaction design"
    ],
    topColleges: [
      "Rhode Island School of Design",
      "Parsons School of Design",
      "California Institute of the Arts",
      "Savannah College of Art and Design",
      "School of Visual Arts"
    ],
    recommendedCourses: [
      {
        title: "BFA in Graphic Design",
        provider: "Art & Design School",
        duration: "4 years",
        type: "Degree"
      },
      {
        title: "UX Design Certification",
        provider: "Google",
        duration: "6 months",
        type: "Certification"
      },
      {
        title: "UI/UX Design Bootcamp",
        provider: "General Assembly",
        duration: "12 weeks",
        type: "Bootcamp"
      }
    ],
    jobOutlook: "The job market for UX/UI designers is growing steadily as companies increasingly recognize the importance of user experience to business success. With the continued digital transformation across industries, skilled designers who can create intuitive, accessible, and engaging interfaces are in high demand."
  },
  {
    id: 3,
    title: "Data Scientist",
    description: "Analyze and interpret complex data to help organizations make better decisions using statistical techniques.",
    longDescription: "Data Scientists extract meaning from and interpret data using various scientific methods, processes, algorithms, and systems. They combine skills from mathematics, statistics, computer science, and domain knowledge to extract insights and knowledge from data. Their work helps organizations make data-driven decisions and develop AI and machine learning models to automate processes and create innovative applications.",
    category: "Technical",
    salary: "$90,000 - $140,000",
    growth: "High",
    education: "MS or PhD in related field",
    skills: ["Machine Learning", "Statistics", "Python", "SQL", "Data Visualization", "Big Data"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    roadmap: [
      "Build strong foundation in mathematics and statistics",
      "Learn programming languages (Python, R)",
      "Develop database and SQL skills",
      "Master data visualization tools",
      "Learn machine learning algorithms and frameworks",
      "Gain domain knowledge in specific industry",
      "Build a portfolio of data projects",
      "Advanced degree or entry-level position"
    ],
    topColleges: [
      "Stanford University",
      "Massachusetts Institute of Technology",
      "University of California, Berkeley",
      "Harvard University",
      "Carnegie Mellon University"
    ],
    recommendedCourses: [
      {
        title: "Master's in Data Science",
        provider: "University Program",
        duration: "1-2 years",
        type: "Degree"
      },
      {
        title: "IBM Data Science Professional Certificate",
        provider: "Coursera",
        duration: "10 courses",
        type: "Certification"
      },
      {
        title: "Data Science Bootcamp",
        provider: "Flatiron School",
        duration: "15 weeks",
        type: "Bootcamp"
      }
    ],
    jobOutlook: "Data Scientist roles are experiencing very high growth as organizations across all sectors seek to leverage their data for competitive advantage. With the exponential growth in data collection and the advancement of AI technologies, qualified data scientists are in extremely high demand."
  },
];

const CareerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [career, setCareer] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, this would be an API call
    setIsLoading(true);
    setTimeout(() => {
      const foundCareer = careerData.find(c => c.id === Number(id));
      setCareer(foundCareer);
      setIsLoading(false);
    }, 500);
  }, [id]);

  const toggleSave = () => {
    setIsSaved(!isSaved);
    
    toast({
      title: isSaved ? "Removed from saved careers" : "Added to saved careers",
      description: isSaved 
        ? "This career has been removed from your dashboard." 
        : "You can view this career in your dashboard.",
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="h-12 w-12 border-t-2 border-primary-blue border-solid rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading career details...</p>
        </div>
      </div>
    );
  }

  if (!career) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Not Found</h2>
            <p className="text-gray-600 mb-6">The career you're looking for doesn't exist or has been removed.</p>
            <Link to="/careers">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Careers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to careers link */}
        <Link to="/careers" className="inline-flex items-center text-primary-blue hover:text-primary-navy mb-6">
          <ArrowLeft className="mr-1 h-4 w-4" />
          <span>Back to Careers</span>
        </Link>
        
        {/* Career Header */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="h-64 relative">
            <img
              src={career.image}
              alt={career.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
          
          <div className="p-6 md:p-8 relative">
            {/* Category Badge */}
            <Badge variant="secondary" className="mb-3">
              {career.category}
            </Badge>
            
            {/* Title and Save Button */}
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{career.title}</h1>
              <button
                onClick={toggleSave}
                className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${
                  isSaved ? "text-red-500" : "text-gray-400"
                }`}
              >
                <Heart
                  size={24}
                  fill={isSaved ? "currentColor" : "none"}
                />
              </button>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 text-lg mb-6">
              {career.longDescription}
            </p>
            
            {/* Key Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <DollarSign className="h-6 w-6 text-primary-blue mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Salary Range</h3>
                  <p className="text-gray-700">{career.salary} annually</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <TrendingUp className="h-6 w-6 text-primary-blue mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Job Growth</h3>
                  <p className="text-gray-700">{career.growth} growth potential</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <BookOpen className="h-6 w-6 text-primary-blue mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Education Required</h3>
                  <p className="text-gray-700">{career.education}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-primary-blue mr-3 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Time to Entry</h3>
                  <p className="text-gray-700">2-4 years (depending on education path)</p>
                </div>
              </div>
            </div>
            
            {/* Skills */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Key Skills</h2>
              <div className="flex flex-wrap gap-2">
                {career.skills.map((skill: string, index: number) => (
                  <Badge key={index} variant="outline" className="bg-gray-50 px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Detailed Info Tabs */}
            <Tabs defaultValue="roadmap" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="roadmap">Career Roadmap</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="outlook">Job Outlook</TabsTrigger>
              </TabsList>
              
              {/* Roadmap Content */}
              <TabsContent value="roadmap" className="mt-0">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Path to Becoming a {career.title}</h3>
                  <ol className="space-y-4">
                    {career.roadmap.map((step: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-blue/10 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-primary-blue text-sm font-medium">{index + 1}</span>
                        </div>
                        <p className="text-gray-700">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </TabsContent>
              
              {/* Education Content */}
              <TabsContent value="education" className="mt-0">
                <div className="space-y-6">
                  {/* Recommended Courses */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Education Paths</h3>
                    <div className="space-y-4">
                      {career.recommendedCourses.map((course: any, index: number) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-gray-900">{course.title}</h4>
                              <p className="text-sm text-gray-600">{course.provider}</p>
                            </div>
                            <Badge variant="outline">{course.type}</Badge>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" /> {course.duration}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Top Colleges */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Educational Institutions</h3>
                    <div className="space-y-2">
                      {career.topColleges.map((college: string, index: number) => (
                        <div key={index} className="flex items-center">
                          <GraduationCap className="h-5 w-5 text-gray-500 mr-2" />
                          <span className="text-gray-700">{college}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Job Outlook Content */}
              <TabsContent value="outlook" className="mt-0">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Future Prospects</h3>
                  <p className="text-gray-700 mb-6">{career.jobOutlook}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center text-gray-900 font-medium mb-2">
                        <Building className="h-5 w-5 mr-2 text-primary-blue" />
                        Industries with High Demand
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-green-500 mr-2" /> Tech
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-green-500 mr-2" /> Healthcare
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-green-500 mr-2" /> Finance
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center text-gray-900 font-medium mb-2">
                        <Globe className="h-5 w-5 mr-2 text-primary-blue" />
                        Geographic Hotspots
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-green-500 mr-2" /> San Francisco
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-green-500 mr-2" /> New York
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-green-500 mr-2" /> Austin
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Call to Action */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1" onClick={toggleSave}>
                  <Heart className="mr-2 h-5 w-5" fill={isSaved ? "currentColor" : "none"} />
                  {isSaved ? "Saved to Dashboard" : "Save to Dashboard"}
                </Button>
                <Link to="/assessment" className="flex-1">
                  <Button variant="outline" className="w-full">Take Career Assessment</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Careers Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Careers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerData
              .filter(c => c.id !== career.id && c.category === career.category)
              .slice(0, 2)
              .map(relatedCareer => (
                <div
                  key={relatedCareer.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden card-hover"
                >
                  <div className="h-32 overflow-hidden">
                    <img
                      src={relatedCareer.image}
                      alt={relatedCareer.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-4">
                    <Badge variant="secondary" className="mb-2">{relatedCareer.category}</Badge>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{relatedCareer.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">{relatedCareer.description}</p>
                    
                    <Link to={`/career/${relatedCareer.id}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        View Career
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetail;
