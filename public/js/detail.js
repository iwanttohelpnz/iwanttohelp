$(document).ready(function () {
    const id = $('#charity-id').val()
    searchCharity(id)
})

function searchCharity(id) {
    $.get(`/search/charities/${id}`, function (data) {
        let charityDetailTemplate = $('#charity-detail-template').html()
        let charityDetail = $('.charity-detail')

        let templateScript = Handlebars.compile(charityDetailTemplate)
        console.log(data)
        const html = templateScript(data)

        charityDetail.append(html)
    })
}