import React from 'react';
import "./Mails.css"

export default function Mails(){
  
  // const getImageExtension = (url) => {
  //   const match = url.match(/\.(jpeg|jpg|png)$/i);
  //   return match ? match[1] : 'unknown';
  // };
  //   const getImage=()=>{
  //     const imageUrl = '/picture.jpeg'; // Replace with the actual path or URL to your image

  //     fetch(imageUrl)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`Failed to download image. Status: ${response.status}`);
  //       }
  //       return response.blob();
  //     })
  //     .then(blob => {
  //       const url = URL.createObjectURL(blob);

  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.download = 'downloaded-image.png'; // Change the name and extension as needed

  //       document.body.appendChild(link);
  //       link.click();

  //       document.body.removeChild(link);

  //       URL.revokeObjectURL(url);
  //     })
  //     .catch(error => console.error('Error handling image download:', error));
  //   };

    const handleDownload = () => {
      const pdfUrl = '/Letter.pdf'; // Replace with the actual path or URL to your PDF
  
      fetch(pdfUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to download PDF. Status: ${response.status}`);
          }
          return response.blob();
        })
        .then(blob => {
          const url = URL.createObjectURL(blob);
  
          const link = document.createElement('a');
          link.href = url;
          link.download = 'downloaded-document.pdf'; // Change the name and extension as needed
  
          document.body.appendChild(link);
          link.click();
  
          document.body.removeChild(link);
  
          URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error handling PDF download:', error));
    };
  


    return(
        <div className='Mails'>
        <h2>Hey you have a letter!💌</h2>
       <button style={{backgroundColor:"seagreen"}} onClick={handleDownload}>Download PDF</button>
       {/* <button onClick={getImage}>Download image</button> */}
       
        </div>
    )
}



// const Mails=()=>{
//     return(
//         <>
//             <h1>Welcome back to your letters!</h1>
//             <iframe
//             title="PDF Viewer"
//             src="your-pdf-document.pdf" // Replace with your actual PDF document URL
//             width="600"
//             height="800"
//             ></iframe>
//         </>
//     );
// };
