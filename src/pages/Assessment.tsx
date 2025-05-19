
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Question {
  id: number;
  text: string;
  options: string[];
  category: "interests" | "skills" | "values" | "personality";
}

interface Answer {
  questionId: number;
  selectedOption: string;
  category: string;
}

// Sample assessment questions
const questions: Question[] = [
  {
    id: 1,
    text: "Which of the following activities do you enjoy most?",
    options: [
      "Solving complex problems",
      "Creating artwork or designs",
      "Helping others learn new skills",
      "Managing and organizing projects"
    ],
    category: "interests"
  },
  {
    id: 2,
    text: "When working on a group project, which role do you naturally take?",
    options: [
      "The problem solver who tackles technical challenges",
      "The creative thinker who offers unique ideas",
      "The mediator who helps resolve conflicts",
      "The organizer who keeps everyone on track"
    ],
    category: "personality"
  },
  {
    id: 3,
    text: "Which of these skills do you feel most confident in?",
    options: [
      "Analytical thinking and logical reasoning",
      "Creativity and artistic expression",
      "Communication and interpersonal skills",
      "Leadership and decision-making"
    ],
    category: "skills"
  },
  {
    id: 4,
    text: "What type of work environment do you prefer?",
    options: [
      "Fast-paced and innovative",
      "Creative and flexible",
      "Collaborative and supportive",
      "Structured and organized"
    ],
    category: "values"
  },
  {
    id: 5,
    text: "What motivates you most in your work?",
    options: [
      "Intellectual challenge and problem-solving",
      "Creative expression and innovation",
      "Making a positive impact on others",
      "Recognition and career advancement"
    ],
    category: "values"
  },
  {
    id: 6,
    text: "How do you prefer to learn new information?",
    options: [
      "Through hands-on experimentation",
      "Through visual materials and demonstrations",
      "Through discussions and explanations from others",
      "Through reading and self-study"
    ],
    category: "personality"
  },
  {
    id: 7,
    text: "Which subject did you enjoy most in school?",
    options: [
      "Mathematics or science",
      "Art or music",
      "Languages or literature",
      "Business or economics"
    ],
    category: "interests"
  },
  {
    id: 8,
    text: "When faced with a challenge, what's your first approach?",
    options: [
      "Break it down logically and analyze it",
      "Think outside the box for creative solutions",
      "Discuss it with others to get different perspectives",
      "Create a structured plan to address it"
    ],
    category: "skills"
  },
];

// Career paths mapped to answer patterns
const careerPaths = {
  technical: {
    title: "Technical & Analytical Careers",
    description: "You show strong analytical skills and enjoy solving complex problems.",
    careers: ["Software Developer", "Data Scientist", "Systems Analyst", "Research Scientist", "Financial Analyst"]
  },
  creative: {
    title: "Creative & Design Careers",
    description: "You have a strong creative thinking ability and enjoy expressing yourself artistically.",
    careers: ["UX/UI Designer", "Digital Marketing Specialist", "Content Creator", "Graphic Designer", "Product Designer"]
  },
  social: {
    title: "Social & Educational Careers",
    description: "You excel in communication and enjoy helping others grow and develop.",
    careers: ["Teacher/Educator", "Social Worker", "HR Specialist", "Customer Success Manager", "Healthcare Professional"]
  },
  management: {
    title: "Management & Organizational Careers",
    description: "You have strong organizational skills and natural leadership abilities.",
    careers: ["Project Manager", "Business Analyst", "Operations Manager", "Management Consultant", "Entrepreneurship"]
  }
};

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleNext = () => {
    if (selectedOption) {
      // Save answer
      setAnswers([
        ...answers,
        {
          questionId: questions[currentQuestion].id,
          selectedOption: selectedOption,
          category: questions[currentQuestion].category
        }
      ]);
      
      // Move to next question or complete quiz
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        // Quiz completed - calculate result
        calculateResult();
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      // Remove the last answer
      const updatedAnswers = [...answers];
      updatedAnswers.pop();
      setAnswers(updatedAnswers);
      setSelectedOption(null);
    }
  };

  const calculateResult = () => {
    // Count the occurrences of each option position
    let optionCounts = [0, 0, 0, 0]; // Corresponds to technical, creative, social, management
    
    answers.forEach(answer => {
      const optionIndex = questions
        .find(q => q.id === answer.questionId)?.options
        .findIndex(opt => opt === answer.selectedOption);
      
      if (optionIndex !== undefined) {
        optionCounts[optionIndex]++;
      }
    });
    
    // Find the highest score
    const maxCount = Math.max(...optionCounts);
    const maxIndex = optionCounts.indexOf(maxCount);
    
    // Map index to career path
    const careerPathKeys = ["technical", "creative", "social", "management"];
    const resultKey = careerPathKeys[maxIndex];
    
    setResult(resultKey);
    setQuizCompleted(true);
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {!quizCompleted ? (
          <>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Career Assessment Quiz</h2>
                  <span className="text-sm font-medium text-gray-500">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                </div>
                
                <Progress value={progressPercentage} className="mb-8" />
                
                <div className="mb-8">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    {questions[currentQuestion].text}
                  </h3>
                  
                  <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption}>
                    <div className="space-y-4">
                      {questions[currentQuestion].options.map((option, index) => (
                        <div
                          key={index}
                          className={`flex items-center border rounded-lg p-4 cursor-pointer transition-colors ${
                            selectedOption === option
                              ? "border-primary-blue bg-blue-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => setSelectedOption(option)}
                        >
                          <RadioGroupItem
                            value={option}
                            id={`option-${index}`}
                            className="mr-3"
                          />
                          <Label
                            htmlFor={`option-${index}`}
                            className="cursor-pointer flex-grow text-gray-700"
                          >
                            {option}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                    className="flex items-center"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  
                  <Button
                    onClick={handleNext}
                    disabled={!selectedOption}
                    className="flex items-center"
                  >
                    {currentQuestion < questions.length - 1 ? (
                      <>
                        Next
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      "Complete Assessment"
                    )}
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center text-sm text-gray-500">
              Your answers help us recommend the most suitable career paths for you.
              <br />
              Take your time and answer as honestly as possible.
            </div>
          </>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden animate-fade-in">
            <div className="px-6 py-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Assessment Complete!</h2>
                <p className="text-gray-600">
                  Based on your responses, we've identified the following career path that aligns with your profile:
                </p>
              </div>
              
              {result && (
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
                  <h3 className="text-2xl font-bold text-primary-blue mb-3">
                    {careerPaths[result as keyof typeof careerPaths].title}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {careerPaths[result as keyof typeof careerPaths].description}
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Recommended Career Options:</h4>
                  <ul className="grid gap-2 md:grid-cols-2">
                    {careerPaths[result as keyof typeof careerPaths].careers.map((career, index) => (
                      <li key={index} className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-blue mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/careers" className="w-full">
                  <Button className="w-full" variant="default">Explore These Careers</Button>
                </Link>
                <Link to="/assessment" className="w-full">
                  <Button className="w-full" variant="outline" onClick={() => window.location.reload()}>
                    Retake Assessment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assessment;
