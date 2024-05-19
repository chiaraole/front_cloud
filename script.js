document.addEventListener("DOMContentLoaded", () => {
    fetch('http://54.198.201.61:8000/students')
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById('content');
            data.students.forEach(student => {
                const div = document.createElement('div');
                div.textContent = `${student.name} ${student.lastname} (${student.degree})`;
                content.appendChild(div);
            });
        })
        .catch(error => console.error('Error:', error));
});
