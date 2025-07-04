# from celery import shared_task
# from .models import BlogUrl, BlogPost
# from bardapi import Bard
# import re
# import random
# from bs4 import BeautifulSoup as bs


# def do_job(url):

#     token = ""  # Replace with your Bard API token
#     bard = Bard(token=token)

#     instruction_1 = """
# You are an advanced AI tasked with analyzing a given URL and identifying the newest topic that has not been selected before. Your goal is to provide a brief summary of the selected topic in a format that includes a suitable title for the content followed by two or three paragraphs.

# Instructions:
# 1. Analyze the provided webpage URL to identify the newest topic that has not been selected before.
# 2. Ensure that the selected topic is unique and has not been previously analyzed.
# 3. Read the content associated with the selected topic and understand its main points and key details.
# 4. Generate a suitable title that accurately represents the content being summarized.
# 5. Write three or four paragraphs summarizing the main points and essential information from the selected topic.
# 6. Keep the summary concise, informative, and engaging, capturing the reader's interest without directly copying sentences or paragraphs from the original content, but the article should be brief.
# 7. Format the response as follows:

# **Suitable title for the content**

# **Content analyzed from the site in three or four paragraphs(the content should be brief)**

# Ensure that the title is descriptive and intriguing, while the content brief summary provides a clear overview of the main points discussed in the topic.

# Remember to analyze the given URL, select a unique and newest topic, and then generate a concise and captivating brief summary that entices readers to explore the content further.
# """
#     response = bard.get_answer(f'{url} \n{instruction_1}')
#     response = response['content']

#     instruction_2 ="""
# Instructions:
# 1. Generate a suitable title that accurately represents the content being summarized.
# 2. Keep the summary concise, informative, and engaging, capturing the reader's interest without directly copying sentences or paragraphs from the original content.
# 3. Format the response in HTML as follows:

# - headings should be wrapped in an <h4> tag.
# - Paragraphs should be wrapped in a <p> tag.
# - Tables should be wrapped in a <table> tag.
# - Lists should be wrapped in an appropriate <ul> or <ol> tag.
# - Images should be wrapped in an <img> tag.
# - Videos should be wrapped in an <iframe> tag.

# Ensure that the title is descriptive and intriguing, while the content summary provides a clear overview of the main points discussed in the topic.
# """
#     raw_content = bard.get_answer(f'{response} {instruction_2}')
#     cleaned_content = raw_content ['content']
#     pattern = r"Sure.*?:"
#     main_content = re.sub(pattern, "", cleaned_content, count=1).strip()
#     main_content = main_content.strip("```html").strip("```")



#     instruction_3 = """- Read the blogpost carefully and identify the main topic and the key points.
# - Use a keyword research tool to find relevant and popular terms related to the topic and the key points.
# - Brainstorm several possible titles using the keywords and following the best practices for writing catchy headlines.
# - Choose the best title that reflects the blogpost's purpose, tone, audience and value proposition.
# - Return only the title as the response and nothing else.
# - The title should be inside of <h1> tag
# - It is important to provide only the title name an not any description based on it.
# - The title shouhld be 10 to 20 characters."""

#     raw_content_title = bard.get_answer(f'{main_content} \n{instruction_3}')
#     content_title = raw_content_title['content']
#     # pattern2 = r"TechCrunch.*?:"
#     # content_title = re.sub(pattern2, "", content_title, count=1).strip()
#     soup = bs(content_title, 'html.parser')
#     content_title = str(soup.h1.text)


#     instruction_4 = f"""Given a piece of content, please analyze it and select the main keywords. Return the keywords in CSV format.

# Content: {response}

# Instructions:
# Read the provided content thoroughly.
# Identify the most important keywords that represent the main topics or concepts in the content.
# Exclude common or irrelevant words that don't contribute to the main ideas.
# Focus on nouns, verbs, adjectives, and specific terms related to the content's subject matter.
# Avoid including pronouns, articles, prepositions, or general words that lack meaningful context.
# If a word has multiple forms (e.g., plural, singular, verb tense), choose the most relevant form.
# Separate each keyword with a comma.
# Provide the list of selected keywords in CSV format as the output.
# Every keyword should be one word.
# Store the keywords in square brackets.
# Example output: [ keyword1, keyword2, keyword3 ]

# Remember, the goal is to capture the essential concepts and topics in the content while excluding common or irrelevant words.
# """
#     tags = bard.get_answer(instruction_4)
#     tags = tags['content']
#     keywords = re.findall(r'\[(.*?)\]', tags)[0]

#     return {"main_content": main_content, "content_title": content_title, "tags": keywords}


# @shared_task()
# def post():

#     data = BlogUrl.objects.all()
#     no = random.randint(0, len(data)-1)
#     link = data[no].url

#     data = do_job(link)
#     content = data['main_content']
#     title = data["content_title"]
#     tags = data["tags"].lowercase()

#     post = Post(title=title, content=content, tags=tags)
#     post.save()

#     return "Saved Sucessesfully"