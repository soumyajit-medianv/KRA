import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, FindOnePostDto, Post, Posts, PostsServiceController, PostsServiceControllerMethods, UpdatePostDto } from '@app/common';
import { Observable } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { CreatePostDto as dto } from './dto/create-post.dto';
import { validateOrReject } from 'class-validator';

@Controller()
@PostsServiceControllerMethods()
export class PostController implements PostsServiceController {
  constructor(private readonly postService: PostService) { }

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const validated = plainToInstance(dto, createPostDto);
    await validateOrReject(validated);
    return this.postService.create(createPostDto);
  }

  findAllPosts(): Promise<Posts> | Observable<Posts> | Posts {
    return this.postService.findAll();
  }

  findOnePost(findOnePostDto: FindOnePostDto): Promise<Post> | Observable<Post> | Post {
    return this.postService.findOne(findOnePostDto.id);
  }

  updatePost(updatePostDto: UpdatePostDto): Promise<Post> | Observable<Post> | Post {
    return this.postService.update(updatePostDto);
  }

  removePost(findOnePostDto: FindOnePostDto): Promise<Post> | Observable<Post> | Post {
    return this.postService.remove(findOnePostDto.id)
  }
}
