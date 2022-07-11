import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { designInfo } from "../components/desgin-info";

const ProjectDetail = () => {
    
    const [projectData, setProjectData] = useState({images: [] });

    const params = useParams();

    useEffect(() => {
        if(params) {
            const getData = designInfo.filter(value => Number(value.id) === Number(params.id))[0];
            setProjectData(getData);
        }
    }, [params]);

    return(
        <div className="container-fluid">
            <div className="row">
            {
                projectData.images.map((value, index) => {
                    return (
                        <img key={`image_${index}`} className="website_image" src={value} alt={projectData.label} title={projectData.label} />
                    )
                })
            }
            </div>
        </div>
    );
}

export default ProjectDetail;