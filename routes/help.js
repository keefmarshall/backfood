/*
 * show help files, which are written in Markdown
 */

var marked = require("marked");
var fs = require("fs");

exports.help = function(req, res)
{
	fs.readFile("help/" + req.params.help + ".md", "UTF-8", function(err, content) {
		if (err) 
		{ 
			res.render("error", { error : "Can't find help file, sorry!"});
		}
		else
		{
			var html = marked(content);
			if (req.query.ajax || req.body.ajax)
			{
				res.send(html);
			}
			else
			{
				res.render("help", { help : html });
			}
		}
		
	});
};
