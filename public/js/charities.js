$(document).ready(function () {
    searchCharities()

})

function searchCharities() {
    $.get('/search/charities', function (data) {
        let charityListTemplate = $('#charity-list-item-template').html()
        let charityList = $('.charity-list')

        let templateScript = Handlebars.compile(charityListTemplate)
        const html = templateScript({charities: data})

        charityList.append(html)
    })
}