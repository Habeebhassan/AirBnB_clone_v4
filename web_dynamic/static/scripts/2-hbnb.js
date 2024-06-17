$(document).ready(function() {
    let selectedAmenities = {};

    $('input[type="checkbox"]').change(function() {
        let amenityId = $(this).attr('data-id');
        let amenityName = $(this).attr('data-name');

        if ($(this).is(':checked')) {
            selectedAmenities[amenityId] = amenityName;
        } else {
            delete selectedAmenities[amenityId];
        }

        let amenityList = Object.values(selectedAmenities).join(', ');
        $('div.amenities h4').text(amenityList);
    });

    $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
        if (data.status === 'OK') {
            $('#api_status').addClass('available').css('background-color', '#ff545f');
        } else {
            $('#api_status').removeClass('available').css('background-color', '#cccccc');
        }
    });
});
