$(document).ready(function() {
    // Get the students data.
    $.ajax({
        url: '/students',
        method: 'GET',
        success: function(data) {
            // Render the students data in the table.
            $('#students-table').html(data);
        }
    });

    // Add a listener for the filter button.
    $('#filter-button').on('click', function() {
        // Get the filter data.
        var name = $('#name').val();
        var total_marks = $('#total_marks').val();

        // Filter the students data.
        $.ajax({
            url: '/students/filter',
            method: 'POST',
            data: {
                name: name,
                total_marks: total_marks
            },
            success: function(data) {
                // Render the filtered students data in the table.
                $('#students-table').html(data);
            }
        });
    });
});