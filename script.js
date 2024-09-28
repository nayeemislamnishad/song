document.getElementById('uploadBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
    const gallery = document.getElementById('gallery');

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileType = file.type.split('/')[0]; // Get the file type (image or video)
        let mediaElement;

        if (fileType === 'image') {
            mediaElement = document.createElement('img');
            mediaElement.src = URL.createObjectURL(file); // Use Object URL for images
        } else if (fileType === 'video') {
            mediaElement = document.createElement('video');
            mediaElement.src = URL.createObjectURL(file); // Use Object URL for videos
            mediaElement.controls = true; // Show video controls
        }

        gallery.appendChild(mediaElement); // Add media to gallery
    }
});

// Handle YouTube link addition
document.getElementById('addYoutubeBtn').addEventListener('click', function() {
    const youtubeLink = document.getElementById('youtubeLinkInput').value;
    const gallery = document.getElementById('gallery');

    // Extract video ID from the YouTube link
    const videoId = youtubeLink.split('v=')[1]?.split('&')[0];
    if (videoId) {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.width = "100%";
        iframe.height = "200px";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        gallery.appendChild(iframe); // Add the embedded video to the gallery
        document.getElementById('youtubeLinkInput').value = ''; // Clear the input
    } else {
        alert('Please enter a valid YouTube link');
    }
});
