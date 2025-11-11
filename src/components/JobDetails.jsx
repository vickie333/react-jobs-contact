import { useLoaderData } from "react-router-dom"

const JobDetails = () => {
    const jobDetail = useLoaderData()

    return (
        <div className="job-detail">
            <p><b>Job title: {jobDetail.title}</b></p>
            <p><b>Salary: {jobDetail.salary}</b></p>
            <p><b>Location: {jobDetail.location}</b></p>
            <p><b>Description:</b> Are you passionate about creating innovative solutions? Join our team as a {jobDetail.title} and make a difference!</p>
            <button>Apply Now</button>
        </div>
    )
}

export default JobDetails

export const jobDetailsLoader = async ({params}) => {
    const {id} = params
    const res = await fetch("http://localhost:5200/jobs/" + id);
    if(!res.ok){
        throw new Error("Could not fetch the job details")
    }
    return res.json();
}