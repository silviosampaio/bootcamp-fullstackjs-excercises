import Game from './game.js';

const Feed = {
  add: () => {
    Feed.remove();

    const { ground, feed, speed } = Game;
    const $gameGround = document.getElementById('game');
    const x = Math.ceil(Math.random() * ground.x);
    const y = Math.ceil(Math.random() * ground.y);

    Game.setProps({
      feed: {
        ...feed,
        x,
        y,
      },
    });

    const $feed = document.createElement('div');
    $feed.style.width = feed.size + 'px';
    $feed.style.height = feed.size + 'px';
    $feed.style.background = 'red';
    $feed.style.position = 'relative';
    $feed.id = 'feed';
    $feed.style.left = x - speed + 'px';
    $feed.style.top = y - speed + 'px';

    $gameGround.append($feed);
  },
  remove: () => {
    const $feed = document.getElementById('feed');
    if ($feed) {
      $feed.remove();
    }
  },
};

export default Feed;
