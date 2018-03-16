// import leedCgbc from './images/leedCgbc.png';
// import './InfoContent.css';
const moment = window.moment;
const googleMaps = window.google.maps;

// const createPhotoMarker = (building) => {
//   const photos = building.photos;
//   if (!photos) {
//     return;
//   }

//   const googlePhoto = new googleMaps.Marker({
//     icon: photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35})
//   });
// }

const certLevel = {
  1: 'LEED Certified',
  2: 'LEED Silver',
  3: 'LEED Gold', 
  4: 'LEED Platinum'
};

// const createInfoHTML = (item) => {
//   return (
//     `<div>
//       <img src="https://thebigfatnoodle.files.wordpress.com/2011/08/image-from-originalbuzz-info.jpg"height=200 width=200></img>
//       <p> ${item.name}. Project # ${item.number} </p>
//       <p> Address: ${item.address} </p>
//       <p> ${certLevel[item.certification_level_id]}. Date certified: ${moment(item.cert_date).format("MMM DD YYYY")} </p>
//       <p> ${item.rating_system}. V: ${item.version}</p>
//       <p> Building size: ${item.size} </p>
//       <p> Building type: ${item.type} </p>
//       </div>`
//   );
// }

const createInfoHTML = (item) => {
  return (
    `<table class="table table-bordered" >
      <tbody height=200 width=120>
        <tr class="table-row">
          <img src="https://s3-ca-central-1.amazonaws.com/cdnarchitect/wp-content/uploads/2016/10/CaGBC-logo_new-3-e1477500943100.jpg" height=100 width=100 />
        </tr>
        <tr class="table-row">
          <td>${item.name}. Project # ${item.number} </td>
        </tr>
        <tr>
          <td>Address: ${item.address} </td>
        </tr>
        <tr>
          <td>${certLevel[item.certification_level_id]}. Date certified: ${moment(item.cert_date).format("MMM DD YYYY")}</td>
        </tr>
        <tr>
          <td>${item.rating_system}. V: ${item.version}</td>
        </tr>
        <tr>
          <td>Building size: ${item.size} </td>
        </tr>
        <tr>
          <td>Building type: ${item.type} </td>
        </tr>
      </tbody>
    </table>`
  );
}

exports.createInfoHTML = createInfoHTML;

