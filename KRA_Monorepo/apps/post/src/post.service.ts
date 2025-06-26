import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post as PostModel } from './entity/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto, Post, Posts, UpdatePostDto } from '@app/common';

@Injectable()
export class PostService {

  constructor(
    @InjectRepository(PostModel)
    private postRepository: Repository<PostModel>
  ) { }

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const newlyCreatedPost = this.postRepository.create({
      ...createPostDto
    });

    return await this.postRepository.save(newlyCreatedPost);
  }

  async findAll(): Promise<Posts> {
    const allPosts = await this.postRepository.find();
    return { posts: allPosts };
  }

  async findOne(id: string): Promise<Post> {
    const singlePost = await this.postRepository.findOne({
      where: { id }
    });

    if (!singlePost) {
      throw new NotFoundException(`Post with ID ${id} is not found.`);
    }

    return singlePost;
  }

  async update(updatePostDto: UpdatePostDto): Promise<Post> {
    const findPostToUpdate = await this.postRepository.findOne({
      where: { id: updatePostDto.id }
    });

    if (!findPostToUpdate) {
      throw new NotFoundException(`Post with ID ${updatePostDto.id} is not found.`)
    }

    if (updatePostDto.title) {
      findPostToUpdate.title = updatePostDto.title;
    }

    if (updatePostDto.content) {
      findPostToUpdate.content = updatePostDto.content;
    }

    return await this.postRepository.save(findPostToUpdate);
  }

  async remove(id: string): Promise<Post> {
    const findPostToDelete = await this.postRepository.findOne({
      where: { id }
    });

    if (!findPostToDelete) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    return await this.postRepository.remove(findPostToDelete);
  }

}
