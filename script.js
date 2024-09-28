document.getElementById('uploadBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
    const gallery = document.getElementById('gallery');

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileType = file.type.split('/')[0]; // Get the file type (image, video, or audio)
        let mediaElement;

        if (fileType === 'image') {
            mediaElement = document.createElement('img');
            mediaElement.src = URL.createObjectURL(file); // Use Object URL for images
        } else if (fileType === 'video') {
            mediaElement = document.createElement('video');
            mediaElement.src = URL.createObjectURL(file); // Use Object URL for videos
            mediaElement.controls = true; // Show video controls
        } else if (fileType === 'audio') {
            mediaElement = document.createElement('audio');
            mediaElement.src = URL.createObjectURL(file); // Use Object URL for audio
            mediaElement.controls = true; // Show audio controls
        }

        gallery.appendChild(mediaElement); // Add media to gallery
    }
});
