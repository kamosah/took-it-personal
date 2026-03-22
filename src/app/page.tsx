import Hero from '@/components/sections/Hero'
import FeaturedWork from '@/components/sections/FeaturedWork'
import ProjectGrid from '@/components/sections/ProjectGrid'
import BlogList from '@/components/sections/BlogList'

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <ProjectGrid />
      <BlogList />
    </main>
  )
}
