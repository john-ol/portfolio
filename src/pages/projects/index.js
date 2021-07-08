import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useProjects } from '../../components/Pages/projects/projects.queries'
import { Layout } from '../../components/Layout/Layout'
import { Seo } from '../../components/Seo/Seo'
import { ProjectCard } from '../../components/Pages/projects/ProjectCard/ProjectCard'
import {
  ProjectsContainer,
  ProjectsGrid,
  ProjectItem,
} from '../../components/Pages/projects/projects.components'
import { projectAnimations } from '../../components/Pages/projects/projects.animations'
export default function Projects() {
  const { nodes } = useProjects()
  return (
    <Layout>
      <Seo pageTitle='Projects' />
      <ProjectsContainer>
        <ProjectsGrid>
          {nodes.map((project, i) => (
            <ProjectItem
              key={project.id}
              variants={projectAnimations}
              initial='hidden'
              animate='visible'
              custom={i}
            >
              <Link to={`/projects/${project.frontmatter.projects.path}`}>
                <ProjectCard
                  title={project.frontmatter.projects.title}
                  image={
                    <GatsbyImage
                      image={getImage(
                        project.frontmatter.projects.thumb.childImageSharp
                      )}
                      alt={project.frontmatter.projects.title}
                    />
                  }
                  type={project.frontmatter.projects.type}
                />
              </Link>
            </ProjectItem>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </Layout>
  )
}
