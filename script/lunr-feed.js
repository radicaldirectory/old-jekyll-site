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
    var initcontent = $('#results').html();
    //console.log(initcontent);
    console.log('^that was the first try');
    
    $('input#search').on('keyup', function () {
        var resultdiv = $('#results');
        // Get query
        var query = $(this).val();
        // Search for it
        var result = index.search(query);
        // store initial content

        // Show results
        resultdiv.empty();

        //console.log(initcontent);
        //console.log('keyup!');
        
        if (query == "") 
            {
                resultdiv.append(initcontent);
            }
        else
            {
                // Add status
                resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');

                // Loop through, match, and add results
                for (var item in result) {
                  var ref = result[item].ref;
                  var searchitem = '<div class="grid-item mr4 mb4"><article class="measure-narrow bg-white br3 pa3 pa4-ns ba b--black-50"><div class="tc"><a class="link underline-hover black" href="'+store[ref].link+'"><h2>'+store[ref].title+'</h2></a><p>'+store[ref].excerpt+'</p></div></article></div>';
                  resultdiv.append(searchitem);
            }
        }
    });
});