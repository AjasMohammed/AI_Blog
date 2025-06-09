from .agent import fetch_feed, ask_llm, save_blog_posts
from celery import shared_task


@shared_task
def generate_and_save_blog_post():
    # result = chain(fetch_feed.s(), ask_llm.s(), save_blog_posts.s())(
    # )()
    # return result
    feed, user_message = fetch_feed()
    print(feed)
    llm_data = ask_llm(feed, user_message)
    print("LLM DATA: ", llm_data)
    save_blog_posts(llm_data)
    print("Mission Accomplished!")