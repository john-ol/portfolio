import React from 'react'
import { Link } from 'gatsby'
import { useProjects } from '../../components/Pages/projects/projects.queries'
import { Layout } from '../../components/Layout/Layout'
import { ProjectCard } from '../../components/Pages/projects/ProjectCard/ProjectCard'
import {
  ProjectsContainer,
  ProjectsGrid,
} from '../../components/Pages/projects/projects.components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function Projects() {
  const { nodes } = useProjects()
  return (
    <Layout>
      <ProjectsContainer>
        <ProjectsGrid>
          {nodes.map((project) => (
            <Link to={`/projects/${project.frontmatter.path}`} key={project.id}>
              <ProjectCard
                title={project.frontmatter.title}
                image={
                  <GatsbyImage
                    image={getImage(project.frontmatter.thumb.childImageSharp)}
                    alt={project.frontmatter.title}
                  />
                }
                type={project.frontmatter.type}
              />
            </Link>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </Layout>
  )
}
