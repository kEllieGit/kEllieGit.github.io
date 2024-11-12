import React, { useState, useEffect } from 'react';
import Project, { ProjectEnum, fetchGitHubRepositoryData } from '../components/Project';

const projectNames = Object.values(ProjectEnum);

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [projects, setProjects] = useState<Partial<any>[]>([]);

  useEffect(() => {
    const fetchProjectsData = async () => {
      const projectDataPromises = projectNames.map((name) =>
        fetchGitHubRepositoryData(name)
      );
      const projectsData = await Promise.all(projectDataPromises);
      setProjects(projectsData);
    };

    fetchProjectsData();
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (!searchQuery) {
      return true;
    }

    const queryKeywords = searchQuery.toLowerCase().split(/\s+/);

    const matchesKeywords = queryKeywords.every((keyword) => {
      const matchesLanguage = project.language?.toLowerCase().includes(keyword);

      const matchesTopics = project.topics?.some((topic: any) =>
        topic.toLowerCase().includes(keyword)
      );

      return matchesLanguage || matchesTopics;
    });

    return matchesKeywords;
  });

  return (
    <div className='layout'>
      <h1>Projects</h1>
      <input
        type='text'
        placeholder='Search by topics or language...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='search-bar'
      />

      <div className='projects'>
        {filteredProjects.map((project) => (
          <Project key={project.id} name={project.name as ProjectEnum} />
        ))}
      </div>
    </div>
  );
};

export default Projects;