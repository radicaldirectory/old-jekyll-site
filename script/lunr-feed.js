---

---
// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('category')
  this.field('tags')
  this.ref('id')
});
{% assign count = 0 %}
{% for group in site.groups %}
  index.add({
    title: {{group.title | jsonify}},
    content: {{group.content | strip_html | jsonify}},
    category: {{group.category | jsonify}},
    tags: {{group.tags | jsonify}},
    id: {{count}}
  });
  {% assign count = count | plus: 1 %}
{% endfor %}
// builds reference data
var store = [{% for group in site.groups %}{
  "title": {{group.title | jsonify}},
  "link": {{ group.url | jsonify }},
  "image": {{ group.image | jsonify }},
  "category": {{ group.categories[0] | jsonify }},
  "excerpt": {{ group.content | strip_html | truncatewords: 20 | jsonify }}
}{% unless forloop.last %},{% endunless %}{% endfor %}]
// builds search
$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    // Get query
    var query = $(this).val();
    // Search for it
    var result = index.search(query);
    // Show results
    resultdiv.empty();
    // Add status
    resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<div class=""><div class=""><a href="'+store[ref].link+'" class="">'+store[ref].title+'</a><div class="">'+store[ref].category+'</div><p>'+store[ref].excerpt+'</p></div>';
      resultdiv.append(searchitem);
    }
  });
});