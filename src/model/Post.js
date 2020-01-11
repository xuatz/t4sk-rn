import { Model } from '@nozbe/watermelondb';
import { field, date, children } from '@nozbe/watermelondb/decorators';

export default class Post extends Model {
  static table = 'posts';
  static associations = {
    comments: { type: 'has_many', foreignKey: 'post_id' },
  };

  @children('comments') comments;

  @field('title') title;
  @field('body') body;
  @field('is_pinned') isPinned;

  @date('last_event_at') lastEventAt;
}
