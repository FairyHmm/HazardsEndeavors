# Replace headings with ones with hyperlinks

<h(.*) id=\"([a-zA-Z\-]*)\">([a-zA-Z \-]*)<\/h(.*)>

<h$1 id="$2" class="anchor">\n$3\n<a href="#$2" class="hash">#</a>\n</h$4>
