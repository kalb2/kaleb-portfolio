import React from 'react';

const ProjectNavigation = ({ projects }) => {
  return (
    <nav className='sticky p-5 border-b top-[7.5rem]'>
      <h2>Jump To</h2>
      <ol className='list-decimal flex'>
        {projects.map((project) => (
          <li key={project.id}>
            <a href={`#${project.id}`}>{project.title}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ProjectNavigation;
