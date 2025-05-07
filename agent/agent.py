from langchain_google_genai import GoogleGenerativeAI
# from django.conf import settings
from langchain_core.prompts import PromptTemplate
from decouple import config
GOOGLE_API_KEY = config("GOOGLE_API_KEY")

# llm = GoogleGenerativeAI(model="gemini-2.0-flash", api_key=settings.GOOGLE_API_KEY)
llm = GoogleGenerativeAI(
    model="gemini-2.0-flash", api_key=GOOGLE_API_KEY)

prompt_template = PromptTemplate.from_template(
    "Fetch information from the URL: {url} and write a blog post on the latest topic in the page in a format that includes a suitable title and a descriptive summary of the content, the content lenght should be according to the topic. The content should be structured well with headings and paragraphs."
)

# prompt = prompt_template.invoke({"url": "https://techcrunch.com/"})
prompt = prompt_template.format(url="https://techcrunch.com/")
response = llm.invoke(prompt)
print(response)
