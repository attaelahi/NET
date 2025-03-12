import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Users, Heart, Globe, type LucideIcon } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProgramCardProps {
  icon: "BookOpen" | "Users" | "Heart" | "Globe"
  title: string
  description: string
  imageUrl?: string
}

export default function ProgramCard({ icon, title, description, imageUrl }: ProgramCardProps) {
  const IconComponent: Record<string, LucideIcon> = {
    BookOpen,
    Users,
    Heart,
    Globe,
  }

  const Icon = IconComponent[icon]

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <div className="flex items-center justify-center w-10 h-10 mb-2 rounded-full bg-white/90">
              <Icon className="w-5 h-5 text-[#1E3A8A]" />
            </div>
          </div>
        </div>
      )}
      <CardContent className={`p-6 ${!imageUrl ? "pt-6" : "pt-4"}`}>
        {!imageUrl && (
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#1E3A8A]/10">
            <Icon className="w-6 h-6 text-[#1E3A8A]" />
          </div>
        )}
        <h3 className="mb-2 text-xl font-semibold text-[#1E3A8A]">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link
          href={`/programs/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex items-center text-[#F97316] hover:text-[#EA580C]"
        >
          View Details <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </CardFooter>
    </Card>
  )
}

