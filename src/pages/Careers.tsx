
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Briefcase, BookOpen, DollarSign, Heart } from "lucide-react";

// Sample career data
const careerData = [
  {
    id: 1,
    title: "Software Developer",
    description: "Design, build, and maintain software applications using various programming languages and frameworks.",
    category: "Technical",
    salary: "$70,000 - $120,000",
    growth: "High",
    education: "Bachelor's in CS or equivalent",
    skills: ["JavaScript", "Python", "Problem-solving", "Teamwork"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "UX/UI Designer",
    description: "Create user-friendly interfaces with a focus on enhancing user experience through research and design principles.",
    category: "Creative",
    salary: "$65,000 - $110,000",
    growth: "Medium-High",
    education: "Design degree or certification",
    skills: ["Figma", "User Research", "Visual Design", "Prototyping"],
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "Data Scientist",
    description: "Analyze and interpret complex data to help organizations make better decisions using statistical techniques.",
    category: "Technical",
    salary: "$90,000 - $140,000",
    growth: "High",
    education: "MS or PhD in related field",
    skills: ["Machine Learning", "Statistics", "Python", "SQL"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 4,
    title: "Marketing Specialist",
    description: "Develop and implement marketing strategies to promote products, services, or brands to target audiences.",
    category: "Creative",
    salary: "$50,000 - $85,000",
    growth: "Medium",
    education: "Bachelor's in Marketing or related",
    skills: ["Social Media", "Content Creation", "Analytics", "SEO"],
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 5,
    title: "Project Manager",
    description: "Plan, execute, and oversee projects to ensure they are completed on time, within budget, and meet requirements.",
    category: "Management",
    salary: "$75,000 - $120,000",
    growth: "Medium-High",
    education: "Bachelor's degree, PMP certification",
    skills: ["Leadership", "Organization", "Communication", "Risk Management"],
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 6,
    title: "Teacher/Educator",
    description: "Instruct students in various subjects, develop lesson plans, and assess student progress.",
    category: "Social",
    salary: "$45,000 - $85,000",
    growth: "Stable",
    education: "Bachelor's or Master's in Education",
    skills: ["Communication", "Patience", "Adaptability", "Subject Knowledge"],
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
  },
];

const categories = ["All", "Technical", "Creative", "Social", "Management"];

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [savedCareers, setSavedCareers] = useState<number[]>([]);

  const filteredCareers = careerData
    .filter(career => 
      (selectedCategory === "All" || career.category === selectedCategory) &&
      (career.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       career.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       career.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())))
    );

  const toggleSave = (id: number) => {
    if (savedCareers.includes(id)) {
      setSavedCareers(savedCareers.filter(careerID => careerID !== id));
    } else {
      setSavedCareers([...savedCareers, id]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Career Paths</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover detailed information about various career options that might be the perfect fit for your skills and interests.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search careers by title, description or skills..."
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
          </div>
        </div>

        {/* Career Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.length > 0 ? (
            filteredCareers.map((career) => (
              <div
                key={career.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={career.image}
                    alt={career.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{career.category}</Badge>
                    <button
                      onClick={() => toggleSave(career.id)}
                      className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${
                        savedCareers.includes(career.id)
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                    >
                      <Heart
                        size={20}
                        fill={savedCareers.includes(career.id) ? "currentColor" : "none"}
                      />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{career.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{career.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <DollarSign className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-gray-700">{career.salary}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Briefcase className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-gray-700">Growth: {career.growth}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-gray-700">{career.education}</span>
                    </div>
                  </div>

                  <div className="mb-5">
                    <div className="flex flex-wrap gap-1">
                      {career.skills.slice(0, 4).map((skill, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-50">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link to={`/career/${career.id}`}>
                    <Button variant="default" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-10 text-center">
              <div className="text-gray-500 mb-2">No careers found matching your criteria.</div>
              <Button variant="outline" onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Saved Careers Floating Button */}
        {savedCareers.length > 0 && (
          <div className="fixed bottom-6 right-6 z-10">
            <Link to="/dashboard">
              <Button className="rounded-full shadow-lg px-6 py-5 flex gap-2">
                <Heart className="h-5 w-5" />
                <span className="font-medium">{savedCareers.length} Saved</span>
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Careers;
