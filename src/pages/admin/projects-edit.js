import { useEffect, router, useState } from "../../lid";
const AdminProjectEditPage = ({ id }) => {
    // const projects = JSON.parse(localStorage.getItem("projects") || []);

    // const currentProject = projects.find((project) => project.id == id);
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/projects/${id}`)
        .then((response) => response.json())
        .then((data) => setProject(data));
    }, []);

    useEffect(() => {
        const form = document.getElementById("form-edit");
        const projectName = document.getElementById("project-name");
        const projectAuthor = document.getElementById("project-author");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = {
                id,
                name: projectName.value,
                author: projectAuthor.value,
            };

            fetch("http://localhost:3000/projects/" + id,{
                method: "PUT",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate("/admin/projects"));
         
            // const newProjects = projects.map((project) => {
            //     return project.id == newProject.id ? newProject : project;
            // });

            // localStorage.setItem("projects", JSON.stringify(newProjects));

            // router.navigate("/admin/projects");
        });
    });
    return `<div>
        <div class="container pt-5">
        <h1>Sửa dự án</h1>
            <form action="" id="form-edit">
                <div class="form-group">
                    <label for="" class="form-label">Tên Dự án</label>
                    <input type="text" class="form-control" id="project-name" value="${project.name}"/>
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Tác giả</label>
                    <input type="text" class="form-control" id="project-author" value="${project.author}" />
                </div>
                <button class="btn btn-primary">Sửa dự án</button>
            </form>
            </div>
    </div>`;
};

export default AdminProjectEditPage;