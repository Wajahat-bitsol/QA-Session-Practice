from crewai import Agent, Task, Crew, Process
from langchain.tools import tool
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Define a custom tool
@tool
def search_web(query: str) -> str:
    """Search the web for information about a given query."""
    # This is a placeholder - in a real implementation, you would integrate with a search API
    return f"Search results for: {query}"

# Create agents
researcher = Agent(
    role='Research Analyst',
    goal='Conduct thorough research on given topics',
    backstory="""You are an expert research analyst with years of experience 
    in gathering and analyzing information from various sources.""",
    tools=[search_web],
    verbose=True
)

writer = Agent(
    role='Content Writer',
    goal='Create engaging and informative content based on research',
    backstory="""You are a skilled content writer who excels at transforming 
    complex information into clear, engaging content.""",
    verbose=True
)

# Create tasks
research_task = Task(
    description="""Research the latest developments in artificial intelligence 
    and its impact on business. Focus on practical applications and real-world examples.""",
    agent=researcher
)

writing_task = Task(
    description="""Using the research provided, create a comprehensive article 
    about AI in business. Make it engaging and accessible to a general audience.""",
    agent=writer
)

# Create and run the crew
crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, writing_task],
    process=Process.sequential
)

if __name__ == "__main__":
    result = crew.kickoff()
    print("\nFinal Result:")
    print(result) 