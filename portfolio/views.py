from django.shortcuts import render
from .models import Project
from blog.models import Post  # Importa el modelo de blog

def home(request):
    projects = Project.objects.all()
    posts = Post.objects.order_by("-date")  # Consulta para obtener los posts
    total_posts = posts.count()  # Cuenta total de posts
    return render(request, 'home.html', {'projects': projects, 'posts': posts, 'total_posts': total_posts})
