
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  FileText, 
  Video, 
  Link as LinkIcon, 
  Download, 
  ExternalLink, 
  ArrowRight 
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Sample resources data
const resourcesData = [
  {
    id: 1,
    title: "Professional Resume Template - Modern",
    description: "A clean, modern resume template optimized for ATS systems.",
    category: "Resume",
    type: "Template",
    url: "#",
    thumbnail: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "Interview Preparation Guide",
    description: "Comprehensive guide to acing your next job interview.",
    category: "Interview",
    type: "Guide",
    url: "#",
    thumbnail: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
  },
  {
    id: 3,
    title: "LinkedIn Profile Optimization",
    description: "Learn how to make your LinkedIn profile stand out to recruiters.",
    category: "Profile",
    type: "Guide",
    url: "#",
    thumbnail: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 4,
    title: "Technical Interview Preparation",
    description: "Practice questions and strategies for technical interviews.",
    category: "Interview",
    type: "Practice",
    url: "#",
    thumbnail: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
  },
  {
    id: 5,
    title: "Cover Letter Template - Entry Level",
    description: "Customizable cover letter template for recent graduates.",
    category: "Resume",
    type: "Template",
    url: "#",
    thumbnail: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 6,
    title: "How to Negotiate Your Salary",
    description: "Tips and scripts for negotiating better compensation.",
    category: "Career",
    type: "Guide",
    url: "#",
    thumbnail: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
  }
];

// External learning platforms
const learningPlatforms = [
  {
    name: "Coursera",
    description: "Online courses from top universities and companies",
    url: "https://www.coursera.org/",
    logo: "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/favicon-192x192.png"
  },
  {
    name: "Udemy",
    description: "Vast library of courses taught by industry experts",
    url: "https://www.udemy.com/",
    logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
  },
  {
    name: "LinkedIn Learning",
    description: "Business, creative, and technology courses",
    url: "https://www.linkedin.com/learning/",
    logo: "https://cdn.lynda.com/static/images/jlt-ios-180.png"
  },
  {
    name: "edX",
    description: "Courses from leading educational institutions",
    url: "https://www.edx.org/",
    logo: "https://www.edx.org/images/logos/edx-logo-elm.svg"
  }
];

// YouTube playlists
const youtubeResources = [
  {
    title: "Software Development Fundamentals",
    channel: "Programming with Mosh",
    url: "https://www.youtube.com/c/programmingwithmosh",
    thumbnail: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    description: "Comprehensive programming tutorials for beginners and intermediate developers."
  },
  {
    title: "UX/UI Design Process",
    channel: "DesignCourse",
    url: "https://www.youtube.com/c/DesignCourse",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    description: "Modern UI design tutorials, training, and inspiration."
  },
  {
    title: "Data Science Essentials",
    channel: "StatQuest with Josh Starmer",
    url: "https://www.youtube.com/c/joshstarmer",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    description: "Statistics, machine learning, and data science tutorials."
  },
  {
    title: "Marketing Strategy Masterclass",
    channel: "Neil Patel",
    url: "https://www.youtube.com/c/NeilPatel",
    thumbnail: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    description: "Digital marketing strategies and tips for business growth."
  }
];

const categories = ["All", "Resume", "Interview", "Profile", "Career"];
const types = ["All", "Template", "Guide", "Practice"];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const filteredResources = resourcesData.filter(resource => 
    (selectedCategory === "All" || resource.category === selectedCategory) &&
    (selectedType === "All" || resource.type === selectedType) &&
    (resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     resource.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleDownload = (resource: any) => {
    // In a real app, this would download the file
    toast({
      title: "Download started",
      description: `Downloading ${resource.title}`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Career Resources</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access a collection of helpful resources to prepare for your career journey, from resume templates to interview guides.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer ${
                      selectedCategory === category
                        ? ""
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {types.map((type) => (
                  <Badge
                    key={type}
                    variant={selectedType === type ? "secondary" : "outline"}
                    className={`cursor-pointer ${
                      selectedType === type
                        ? ""
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resources Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden card-hover"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={resource.thumbnail}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">{resource.category}</Badge>
                    <Badge variant="outline" className="bg-gray-50">{resource.type}</Badge>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-5">{resource.description}</p>

                  <div className="flex items-center justify-between">
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="flex items-center">
                        <LinkIcon className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </a>
                    
                    <Button
                      variant="default"
                      size="sm"
                      className="flex items-center"
                      onClick={() => handleDownload(resource)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-10 text-center">
              <div className="text-gray-500 mb-2">No resources found matching your criteria.</div>
              <Button 
                variant="outline" 
                onClick={() => { 
                  setSearchTerm(""); 
                  setSelectedCategory("All"); 
                  setSelectedType("All"); 
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Learning Platforms */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPlatforms.map((platform, index) => (
              <a 
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all card-hover"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 mr-3 bg-gray-100 rounded-md flex items-center justify-center">
                    {/* Placeholder for logo */}
                    <ExternalLink className="h-5 w-5 text-gray-500" />
                  </div>
                  <h3 className="font-bold text-gray-900">{platform.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{platform.description}</p>
                <div className="flex items-center text-primary-blue text-sm font-medium">
                  Visit Platform
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* YouTube Resources */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended YouTube Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {youtubeResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all"
              >
                <div className="w-1/3">
                  <div className="h-full relative">
                    <img
                      src={resource.thumbnail}
                      alt={resource.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Video className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="w-2/3 p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{resource.title}</h3>
                  <p className="text-primary-blue text-sm mb-2">{resource.channel}</p>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
