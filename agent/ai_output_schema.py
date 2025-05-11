blog_schema_v1 = {
    "name": "generate_blog_post",
    "description": "Generate a blog post based on RSS feed",
    "parameters": {
        "type": "object",
        "properties": {
            "feeds": {
                "type": "array",
                "items":  {
                    "type": "object",
                    "properties": {
                        "title": {"type": "string", "description": "Title of the blog post"},
                        "summary": {"type": "string", "description": "Brief summary"},
                        "sections": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "heading": {"type": "string", "description": "sub heading"},
                                    "content": {"type": "string", "description": "detailed info of the sub heading in markdown code."}
                                },
                                "required": ["heading", "content"]
                            }
                        },
                        "source_links": {
                            "type": "array",
                            "items": {"type": "string", "format": "uri"}
                        },
                        "tags": {
                            "type": "array",
                            "items": {"type": "string", "description": "tags related to the topic"}
                        }
                    }
                },
                "required": ["title", "summary", "sections", "source_links"]
            },
        }
    }
}

blog_schema_v2 = {
    "name": "generate_blog_post",
    "description": "Generate a blog post based on RSS feed",
    "parameters": {
        "type": "object",
        "properties": {
            "feeds": {
                "type": "array",
                "items":  {
                    "type": "object",
                    "properties": {
                        "title": {"type": "string", "description": "Title of the blog post"},
                        "summary": {"type": "string", "description": "Brief summary"},
                        "content": {"type": "string", "description": "detailed contents of the topics seperated as subheadings and its contents in markdown code."},
                        "external_links": {
                            "type": "array",
                            "items": {"type": "string", "format": "uri"}
                        },
                        "tags": {
                            "type": "array",
                            "items": {"type": "string", "description": "tags related to the topic"}
                        }
                    }
                },
                "required": ["title", "summary", "content", "external_links"]
            },
        }
    }
}
