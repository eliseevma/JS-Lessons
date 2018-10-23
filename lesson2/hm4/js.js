window.onload = () => {
    document.getElementById('success').addEventListener('click', () => {
        let block = document.getElementById('data');
        fetch('success.json')
            .then(result => {
                console.log(result);
                return result.json();
            })
            .then(data => {
                console.log(data);
                block.innerHTML = ` ${data.result} `;
            })
            .catch(error => {
                console.log(error);
            });
    });
    document.getElementById('error').addEventListener('click', () => {
        let block = document.getElementById('data');
        fetch('error.json')
            .then(result => {
                console.log(result);
                return result.json();
            })
            .then(data => {
                console.log(data);
                block.innerHTML = ` ${data.result} `;
            })
            .catch(error => {
                console.log(error);
            });
    });
};