var search_data = {"index":{"searchIndex":["html","pipeline","absolutesourcefilter","autolinkfilter","bodycontent","camofilter","emailreplyfilter","emojifilter","filter","invaliddocumentexception","httpsfilter","imagefilter","imagemaxwidthfilter","markdownfilter","mentionfilter","missingdependencyerror","plaintextinputfilter","sanitizationfilter","syntaxhighlightfilter","tableofcontentsfilter","textfilter","textilefilter","nokogiri","xml","node","anchor_icon()","asset_host_whitelisted?()","asset_proxy_enabled?()","asset_proxy_host()","asset_proxy_secret_key()","asset_proxy_url()","asset_proxy_whitelist()","asset_url_hash()","base_url()","call()","call()","call()","call()","call()","call()","call()","call()","call()","call()","current_user()","default_payload()","doc()","document()","has_ancestor?()","hexencode()","html()","http_url()","image_base_url()","image_subpage_url()","info_url()","instrument()","instrumentation_name()","link_image()","link_to_mention_info()","link_to_mentioned_user()","mention_link_filter()","mentioned_logins_in()","needs()","new()","new()","new()","new()","output()","parse()","parse_html()","perform_filter()","repository()","setup_instrumentation()","to_document()","to_document()","to_html()","to_html()","username_pattern()","validate()","validate()","validate()"],"longSearchIndex":["html","html::pipeline","html::pipeline::absolutesourcefilter","html::pipeline::autolinkfilter","html::pipeline::bodycontent","html::pipeline::camofilter","html::pipeline::emailreplyfilter","html::pipeline::emojifilter","html::pipeline::filter","html::pipeline::filter::invaliddocumentexception","html::pipeline::httpsfilter","html::pipeline::imagefilter","html::pipeline::imagemaxwidthfilter","html::pipeline::markdownfilter","html::pipeline::mentionfilter","html::pipeline::missingdependencyerror","html::pipeline::plaintextinputfilter","html::pipeline::sanitizationfilter","html::pipeline::syntaxhighlightfilter","html::pipeline::tableofcontentsfilter","html::pipeline::textfilter","html::pipeline::textilefilter","nokogiri","nokogiri::xml","nokogiri::xml::node","html::pipeline::tableofcontentsfilter#anchor_icon()","html::pipeline::camofilter#asset_host_whitelisted?()","html::pipeline::camofilter#asset_proxy_enabled?()","html::pipeline::camofilter#asset_proxy_host()","html::pipeline::camofilter#asset_proxy_secret_key()","html::pipeline::camofilter#asset_proxy_url()","html::pipeline::camofilter#asset_proxy_whitelist()","html::pipeline::camofilter#asset_url_hash()","html::pipeline::filter#base_url()","html::pipeline#call()","html::pipeline::absolutesourcefilter#call()","html::pipeline::camofilter#call()","html::pipeline::filter::call()","html::pipeline::filter#call()","html::pipeline::httpsfilter#call()","html::pipeline::imagefilter#call()","html::pipeline::imagemaxwidthfilter#call()","html::pipeline::mentionfilter#call()","html::pipeline::tableofcontentsfilter#call()","html::pipeline::filter#current_user()","html::pipeline#default_payload()","html::pipeline::filter#doc()","html::pipeline::bodycontent#document()","html::pipeline::filter#has_ancestor?()","html::pipeline::camofilter#hexencode()","html::pipeline::filter#html()","html::pipeline::httpsfilter#http_url()","html::pipeline::absolutesourcefilter#image_base_url()","html::pipeline::absolutesourcefilter#image_subpage_url()","html::pipeline::mentionfilter#info_url()","html::pipeline#instrument()","html::pipeline#instrumentation_name()","html::pipeline::imagemaxwidthfilter#link_image()","html::pipeline::mentionfilter#link_to_mention_info()","html::pipeline::mentionfilter#link_to_mentioned_user()","html::pipeline::mentionfilter#mention_link_filter()","html::pipeline::mentionfilter::mentioned_logins_in()","html::pipeline::filter#needs()","html::pipeline::new()","html::pipeline::bodycontent::new()","html::pipeline::filter::new()","html::pipeline::textfilter::new()","html::pipeline::bodycontent#output()","html::pipeline::parse()","html::pipeline::filter#parse_html()","html::pipeline#perform_filter()","html::pipeline::filter#repository()","html::pipeline#setup_instrumentation()","html::pipeline#to_document()","html::pipeline::filter::to_document()","html::pipeline#to_html()","html::pipeline::filter::to_html()","html::pipeline::mentionfilter#username_pattern()","html::pipeline::camofilter#validate()","html::pipeline::filter#validate()","html::pipeline::httpsfilter#validate()"],"info":[["HTML","","HTML.html","",""],["HTML::Pipeline","","HTML/Pipeline.html","","<p>GitHub HTML processing filters and utilities. This module includes a small\nframework for defining DOM …\n"],["HTML::Pipeline::AbsoluteSourceFilter","","HTML/Pipeline/AbsoluteSourceFilter.html","",""],["HTML::Pipeline::AutolinkFilter","","HTML/Pipeline/AutolinkFilter.html","",""],["HTML::Pipeline::BodyContent","","HTML/Pipeline/BodyContent.html","","<p>Public: Runs a String of content through an HTML processing pipeline,\nproviding easy access to a generated …\n"],["HTML::Pipeline::CamoFilter","","HTML/Pipeline/CamoFilter.html","","<p>HTML Filter for replacing http image URLs with camo versions. See:\n<p>github.com/atmos/camo\n<p>All images provided …\n"],["HTML::Pipeline::EmailReplyFilter","","HTML/Pipeline/EmailReplyFilter.html","",""],["HTML::Pipeline::EmojiFilter","","HTML/Pipeline/EmojiFilter.html","",""],["HTML::Pipeline::Filter","","HTML/Pipeline/Filter.html","","<p>Base class for user content HTML filters. Each filter takes an HTML string\nor Nokogiri::HTML::DocumentFragment …\n"],["HTML::Pipeline::Filter::InvalidDocumentException","","HTML/Pipeline/Filter/InvalidDocumentException.html","",""],["HTML::Pipeline::HttpsFilter","","HTML/Pipeline/HttpsFilter.html","","<p>HTML Filter for replacing http references to :http_url with https versions.\nSubdomain references are …\n"],["HTML::Pipeline::ImageFilter","","HTML/Pipeline/ImageFilter.html","","<p>HTML Filter that converts image&#39;s url into &lt;img&gt; tag. For\nexample, it will convert\n\n<pre>http://example.com/test.jpg</pre>\n"],["HTML::Pipeline::ImageMaxWidthFilter","","HTML/Pipeline/ImageMaxWidthFilter.html","","<p>This filter rewrites image tags with a max-width inline style and also\nwraps the image in an &lt;a&gt; …\n"],["HTML::Pipeline::MarkdownFilter","","HTML/Pipeline/MarkdownFilter.html","",""],["HTML::Pipeline::MentionFilter","","HTML/Pipeline/MentionFilter.html","","<p>HTML filter that replaces @user mentions with links. Mentions within\n&lt;pre&gt;, &lt;code&gt;, and &lt;a&gt; …\n"],["HTML::Pipeline::MissingDependencyError","","HTML/Pipeline/MissingDependencyError.html","",""],["HTML::Pipeline::PlainTextInputFilter","","HTML/Pipeline/PlainTextInputFilter.html","",""],["HTML::Pipeline::SanitizationFilter","","HTML/Pipeline/SanitizationFilter.html","",""],["HTML::Pipeline::SyntaxHighlightFilter","","HTML/Pipeline/SyntaxHighlightFilter.html","",""],["HTML::Pipeline::TableOfContentsFilter","","HTML/Pipeline/TableOfContentsFilter.html","","<p>HTML filter that adds an &#39;id&#39; attribute to all headers in a\ndocument, so they can be accessed …\n"],["HTML::Pipeline::TextFilter","","HTML/Pipeline/TextFilter.html","",""],["HTML::Pipeline::TextileFilter","","HTML/Pipeline/TextileFilter.html","",""],["Nokogiri","","Nokogiri.html","",""],["Nokogiri::XML","","Nokogiri/XML.html","",""],["Nokogiri::XML::Node","","Nokogiri/XML/Node.html","",""],["anchor_icon","HTML::Pipeline::TableOfContentsFilter","HTML/Pipeline/TableOfContentsFilter.html#method-i-anchor_icon","()","<p>The icon that will be placed next to an anchored rendered markdown header\n"],["asset_host_whitelisted?","HTML::Pipeline::CamoFilter","HTML/Pipeline/CamoFilter.html#method-i-asset_host_whitelisted-3F","(host)",""],["asset_proxy_enabled?","HTML::Pipeline::CamoFilter","HTML/Pipeline/CamoFilter.html#method-i-asset_proxy_enabled-3F","()","<p>Private: Return true if asset proxy filter should be enabled\n"],["asset_proxy_host","HTML::Pipeline::CamoFilter","HTML/Pipeline/CamoFilter.html#method-i-asset_proxy_host","()","<p>Private: the host to use for generated asset proxied URLs.\n"],["asset_proxy_secret_key","HTML::Pipeline::CamoFilter","HTML/Pipeline/CamoFilter.html#method-i-asset_proxy_secret_key","()",""],["asset_proxy_url","HTML::Pipeline::CamoFilter","HTML/Pipeline/CamoFilter.html#method-i-asset_proxy_url","(url)","<p>The camouflaged URL for a given image URL.\n"],["asset_proxy_whitelist","HTML::Pipeline::CamoFilter","HTML/Pipeline/CamoFilter.html#method-i-asset_proxy_whitelist","()",""],["asset_url_hash","HTML::Pipeline::CamoFilter","HTML/Pipeline/CamoFilter.html#method-i-asset_url_hash","(url)","<p>Private: calculate the HMAC digest for a image source URL.\n"],["base_url","HTML::Pipeline::Filter","HTML/Pipeline/Filter.html#method-i-base_url","()","<p>The site&#39;s base URL provided in the context hash, or &#39;/&#39; when\nno base URL was specified. …\n"],["call","HTML::Pipeline","HTML/Pipeline.html#method-i-call","(html, context = {}, result = nil)","<p>Apply all filters in the pipeline to the given HTML.\n<p>html    - A String containing HTML or a DocumentFragment …\n"],["call","HTML::Pipeline::AbsoluteSourceFilter","HTML/Pipeline/AbsoluteSourceFilter.html#method-i-call","()","<p>HTML Filter for replacing relative and root relative image URLs with fully\nqualified URLs\n<p>This is useful …\n"],["call","HTML::Pipeline::CamoFilter","HTML/Pipeline/CamoFilter.html#method-i-call","()","<p>Hijacks images in the markup provided, replacing them with URLs that go\nthrough the github asset proxy. …\n"],["call","HTML::Pipeline::Filter","HTML/Pipeline/Filter.html#method-c-call","(doc, context = nil, result = nil)","<p>Perform a filter on doc with the given context.\n<p>Returns a HTML::Pipeline::DocumentFragment or a String …\n"],["call","HTML::Pipeline::Filter","HTML/Pipeline/Filter.html#method-i-call","()","<p>The main filter entry point. The doc attribute is guaranteed to be a\nNokogiri::HTML::DocumentFragment …\n"],["call","HTML::Pipeline::HttpsFilter","HTML/Pipeline/HttpsFilter.html#method-i-call","()",""],["call","HTML::Pipeline::ImageFilter","HTML/Pipeline/ImageFilter.html#method-i-call","()",""],["call","HTML::Pipeline::ImageMaxWidthFilter","HTML/Pipeline/ImageMaxWidthFilter.html#method-i-call","()",""],["call","HTML::Pipeline::MentionFilter","HTML/Pipeline/MentionFilter.html#method-i-call","()",""],["call","HTML::Pipeline::TableOfContentsFilter","HTML/Pipeline/TableOfContentsFilter.html#method-i-call","()",""],["current_user","HTML::Pipeline::Filter","HTML/Pipeline/Filter.html#method-i-current_user","()","<p>The User object provided in the context hash, or nil when no user was\nspecified\n"],["default_payload","HTML::Pipeline","HTML/Pipeline.html#method-i-default_payload","(payload = {})","<p>Internal: Default payload for instrumentation.\n<p>Accepts a Hash of additional payload data to be merged. …\n"],["doc","HTML::Pipeline::Filter","HTML/Pipeline/Filter.html#method-i-doc","()","<p>The Nokogiri::HTML::DocumentFragment to be manipulated. If the filter was\nprovided a String, parse into …\n"],["document","HTML::Pipeline::BodyContent","HTML/Pipeline/BodyContent.html#method-i-document","()","<p>Public: Parses the output into a DocumentFragment.\n<p>Returns a DocumentFragment.\n"],["has_ancestor?","HTML::Pipeline::Filter","HTML/Pipeline/Filter.html#method-i-has_ancestor-3F","(node, tags)","<p>Helper method for filter subclasses used to determine if any of a\nnode&#39;s ancestors have one of the …\n"],["hexencode","HTML::Pipeline::CamoFilter","HTML/Pipeline/CamoFilter.html#method-i-hexencode","(str)","<p>Private: helper to hexencode a string. Each byte ends up encoded into two\ncharacters, zero padded value …\n"],["html","HTML::Pipeline::Filter","HTML/Pipeline/Filter.html#method-i-html","()","<p>The String representation of the document. If a DocumentFragment was\nprovided to the Filter, it is serialized …\n"],["http_url","HTML::Pipeline::HttpsFilter","HTML/Pipeline/HttpsFilter.html#method-i-http_url","()","<p>HTTP url to replace. Falls back to :base_url\n"],["image_base_url","HTML::Pipeline::AbsoluteSourceFilter","HTML/Pipeline/AbsoluteSourceFilter.html#method-i-image_base_url","()","<p>Private: the base url you want to use\n"],["image_subpage_url","HTML::Pipeline::AbsoluteSourceFilter","HTML/Pipeline/AbsoluteSourceFilter.html#method-i-image_subpage_url","()","<p>Private: the relative url you want to use\n"],["info_url","HTML::Pipeline::MentionFilter","HTML/Pipeline/MentionFilter.html#method-i-info_url","()","<p>The URL to provide when someone @mentions a “mention” name, such as\n@mention or @mentioned, …\n"],["instrument","HTML::Pipeline","HTML/Pipeline.html#method-i-instrument","(event, payload = nil)","<p>Internal: if the `instrumentation_service` object is set, instruments the\nblock, otherwise the block …\n"],["instrumentation_name","HTML::Pipeline","HTML/Pipeline.html#method-i-instrumentation_name","()",""],["link_image","HTML::Pipeline::ImageMaxWidthFilter","HTML/Pipeline/ImageMaxWidthFilter.html#method-i-link_image","(element)",""],["link_to_mention_info","HTML::Pipeline::MentionFilter","HTML/Pipeline/MentionFilter.html#method-i-link_to_mention_info","(text, info_url=nil)",""],["link_to_mentioned_user","HTML::Pipeline::MentionFilter","HTML/Pipeline/MentionFilter.html#method-i-link_to_mentioned_user","(login)",""],["mention_link_filter","HTML::Pipeline::MentionFilter","HTML/Pipeline/MentionFilter.html#method-i-mention_link_filter","(text, base_url='/', info_url=nil, username_pattern=UsernamePattern)","<p>Replace user @mentions in text with links to the mentioned user&#39;s\nprofile page.\n<p>text      - String …\n"],["mentioned_logins_in","HTML::Pipeline::MentionFilter","HTML/Pipeline/MentionFilter.html#method-c-mentioned_logins_in","(text, username_pattern=UsernamePattern)","<p>Public: Find user @mentions in text.  See\nMentionFilter#mention_link_filter.\n\n<pre>MentionFilter.mentioned_logins_in(text) ...</pre>\n"],["needs","HTML::Pipeline::Filter","HTML/Pipeline/Filter.html#method-i-needs","(*keys)","<p>Validator for required context. This will check that anything passed in\ncontexts exists in @contexts …\n"],["new","HTML::Pipeline","HTML/Pipeline.html#method-c-new","(filters, default_context = {}, result_class = nil)",""],["new","HTML::Pipeline::BodyContent","HTML/Pipeline/BodyContent.html#method-c-new","(body, context, pipeline)","<p>Public: Initialize a BodyContent.\n<p>body     - A String body. context  - A Hash of context options for the …\n"],["new","HTML::Pipeline::Filter","HTML/Pipeline/Filter.html#method-c-new","(doc, context = nil, result = nil)",""],["new","HTML::Pipeline::TextFilter","HTML/Pipeline/TextFilter.html#method-c-new","(text, context = nil, result = nil)",""],["output","HTML::Pipeline::BodyContent","HTML/Pipeline/BodyContent.html#method-i-output","()","<p>Public: Gets the updated body from the Pipeline result.\n<p>Returns a String or DocumentFragment.\n"],["parse","HTML::Pipeline","HTML/Pipeline.html#method-c-parse","(document_or_html)","<p>Parse a String into a DocumentFragment object. When a DocumentFragment is\nprovided, return it verbatim. …\n"],["parse_html","HTML::Pipeline::Filter","HTML/Pipeline/Filter.html#method-i-parse_html","(html)","<p>Ensure the passed argument is a DocumentFragment. When a string is\nprovided, it is parsed and returned; …\n"],["perform_filter","HTML::Pipeline","HTML/Pipeline.html#method-i-perform_filter","(filter, doc, context, result)","<p>Internal: Applies a specific filter to the supplied doc.\n<p>The filter is instrumented.\n<p>Returns the result …\n"],["repository","HTML::Pipeline::Filter","HTML/Pipeline/Filter.html#method-i-repository","()","<p>The Repository object provided in the context hash, or nil when no\n:repository was specified.\n<p>It&#39;s …\n"],["setup_instrumentation","HTML::Pipeline","HTML/Pipeline.html#method-i-setup_instrumentation","(name = nil, service = nil)","<p>Public: setup instrumentation for this pipeline.\n<p>Returns nothing.\n"],["to_document","HTML::Pipeline","HTML/Pipeline.html#method-i-to_document","(input, context = {}, result = nil)","<p>Like call but guarantee the value returned is a DocumentFragment. Pipelines\nmay return a DocumentFragment …\n"],["to_document","HTML::Pipeline::Filter","HTML/Pipeline/Filter.html#method-c-to_document","(input, context = nil)","<p>Like call but guarantees that a DocumentFragment is returned, even when the\nlast filter returns a String …\n"],["to_html","HTML::Pipeline","HTML/Pipeline.html#method-i-to_html","(input, context = {}, result = nil)","<p>Like call but guarantee the value returned is a string of HTML markup.\n"],["to_html","HTML::Pipeline::Filter","HTML/Pipeline/Filter.html#method-c-to_html","(input, context = nil)","<p>Like call but guarantees that a string of HTML markup is returned.\n"],["username_pattern","HTML::Pipeline::MentionFilter","HTML/Pipeline/MentionFilter.html#method-i-username_pattern","()",""],["validate","HTML::Pipeline::CamoFilter","HTML/Pipeline/CamoFilter.html#method-i-validate","()","<p>Implementation of validate hook. Errors should raise exceptions or use an\nexisting validator.\n"],["validate","HTML::Pipeline::Filter","HTML/Pipeline/Filter.html#method-i-validate","()","<p>Make sure the context has everything we need. Noop: Subclasses can\noverride.\n"],["validate","HTML::Pipeline::HttpsFilter","HTML/Pipeline/HttpsFilter.html#method-i-validate","()","<p>Raise error if :http_url undefined\n"]]}}