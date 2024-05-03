import { useState, useEffect } from 'react';
import '../assets/styles/projects.scss';
import vueJs from '../assets/svg/vuejs.svg';
import javascript from '../assets/svg/js.svg';
import typescript from '../assets/svg/typescript.svg';


function Projects() {
    const [repos, updateRepos] = useState([]);
    const [loading, updateLoading] = useState(false);
    async function getRepos() {
        // Replace with your username to retrieve your repos
        let username = 'shashiranjansharma';
        try {
            updateLoading(true);
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            const repos = await response.json();
            updateRepos(repos);
        }
        catch (e) { console.log(e); }
        finally {
            updateLoading(false);
        }
    }

    useEffect(() => {
        getRepos();
    }, []);

    return (
        // <>
        // {/* for="i in 5" :key="i" class="shimmerBG content-line"></div> */}
        // </>
        <div className='projects'>
            <h1 className='text-gradient'>Projects</h1>
            {loading ? <div className='mt-6'>
                <div className="shimmerBG content-line"></div>
                <div className="shimmerBG content-line"></div>
                <div className="shimmerBG content-line"></div>
                <div className="shimmerBG content-line"></div>
            </div> :
                <>
                    <div className='grid'>
                        {repos.map((repo: any) =>
                            <div className="card" key={repo.id}>
                                <div>
                                    <div className="card-heading">
                                        <p className="leading-smallest">{repo.name}</p>
                                        <a href={repo.html_url} target="_blank">{repo.html_url.slice(8)}</a>
                                    </div>
                                    <div className="card-body">
                                        <p>{repo.description}</p>
                                    </div>
                                    <div className="card-footer">
                                        <a href={repo.homepage} target="_blank">{repo.homepage}</a>
                                        <p className="language">{repo.language}</p>
                                    </div>
                                </div >
                                <div className='icon'>
                                    <img src={repo.language === 'Vue' ? vueJs : repo.language === 'TypeScript' ? typescript : javascript} alt="language" />
                                </div>
                            </div >
                        )}
                    </div>
                </>}
        </div >
    );
}

export default Projects;