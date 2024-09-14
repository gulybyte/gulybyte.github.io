import { Injectable } from '@nestjs/common';
import { PostsDto } from '@dto/posts-dto';
import { PostDto } from '@dto/post-dto';

@Injectable()
export class AppService {
  getPost(id: number): { posts: PostDto | undefined } {
    const post = this.allPosts().posts.find((post) => post.id === +id);
    return { posts: post };
  }

  getPosts(): { posts: PostsDto[] } {
    return this.allPosts();
  }

  private allPosts(): { posts: PostDto[] } {
    return {
      posts: [
        {
          id: 1,
          title: 'asaddf',
          content: `quia et suscipit\nsuscipit recusandae consequuntur
            expedita et cum nreprehenderit molestiae ut ut quas totam
            nnostrum rerum est autem sunt rem eveniet architecto`,
        },
        {
          id: 2,
          title: 'qui est esse',
          content: `est rerum tempore vitae\nsequi sint nihil reprehenderit dolor
            beatae ea dolores neque\nfugiat blanditiis voluptate porro vel
            nihil molestiae ut reiciendis\nqui aperiam non debitis possimus
            qui neque nisi nulla`,
        },
        {
          id: 3,
          title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
          content: `et iusto sed quo iure\nvoluptatem occaecati omnis eligendi
            aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae
            porro eius odio et labore et velit aut`,
        },
        {
          id: 4,
          title: 'eum et est occaecati',
          content: `ullam et saepe reiciendis voluptatem adipisci\nsit amet autem
            assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur
            doloremque ipsam iure\nquis sunt voluptatem rerum illo velit`,
        },
        {
          id: 5,
          title: 'nesciunt quas odio',
          content: `repudiandae veniam quaerat sunt sed\nalias aut fugiat sit
            autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest
            aut tenetur dolor neque`,
        },
        {
          id: 6,
          title: 'dolorem eum magni eos aperiam quia',
          content: `ut aspernatur corporis harum nihil quis provident
            sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo
            ab reprehenderit accusantium quas\nvoluptate dolores velit et
            doloremque molestiae`,
        },
        {
          id: 7,
          title: 'magnam facilis autem',
          content: `dolore placeat quibusdam ea quo vitae\nmagni quis enim qui
            quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt
            ut sequi eos ea sed quas`,
        },
        {
          id: 8,
          title: 'dolorem dolore est ipsam',
          content: `dignissimos aperiam dolorem qui eum\nfacilis quibusdam
            animi sint suscipit qui sint possimus cum\nquaerat magni maiores
            excepturi\nipsam ut commodi dolor voluptatum modi aut vitae`,
        },
        {
          id: 9,
          title: 'nesciunt iure omnis dolorem tempora et accusantium',
          content: `consectetur animi nesciunt iure dolore\nenim quia ad\nveniam
            autem ut quam aut nobis\net est aut quod aut provident voluptas
            autem voluptas`,
        },
        {
          id: 10,
          title: 'optio molestias id quia eum',
          content: `quo et expedita modi cum officia vel magni\ndoloribus qui
            repudiandae\nvero nisi sit\nquos veniam quod sed accusamus
            veritatis error`,
        },
        {
          id: 11,
          title: 'et ea vero quia laudantium autem',
          content: `delectus reiciendis molestiae occaecati non minima eveniet
            qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque
            voluptates ut commodi qui incidunt\nut animi commodi`,
        },
        {
          id: 12,
          title: 'in quibusdam tempore odit est dolorem',
          content: `itaque id aut magnam\npraesentium quia et ea odit et ea
          voluptas et\nsapiente quia nihil amet occaecati quia id
          voluptatem\nincidunt ea est distinctio odio`,
        },
        {
          id: 13,
          title: 'dolorum ut in voluptas mollitia et saepe quo animi',
          content: `aut dicta possimus sint mollitia voluptas commodi quo
            doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit
            cumque quod eligendi laborum minima\nperferendis recusandae
            assumenda consectetur porro architecto ipsum ipsam`,
        },
        {
          id: 14,
          title: 'voluptatem eligendi optio',
          content: `fuga et accusamus dolorum perferendis illo voluptas\nnon
            doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut
            voluptas totam sit illum`,
        },
        {
          id: 15,
          title: 'eveniet quod temporibus',
          content: `reprehenderit quos placeat\nvelit minima officia dolores
            impedit repudiandae molestiae nam\nvoluptas recusandae quis
            delectus\nofficiis harum fugiat vitae`,
        },
      ],
    };
  }
}
