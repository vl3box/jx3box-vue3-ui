import { $next } from "@jx3box/jx3box-common/js/https_v2.js";
const $n = $next();

function hasFav(post_type, post_id) {
    return $n.get(`api/article/favorites/is-my/${post_id}/${post_type}`).then((res) => {
        return res.data.data;
    });
}
function addFav(post_type, post_id, post_title) {
    return $n.post(`api/article/favorites/add/${post_id}/${post_type}`, { post_title }).then((res) => {
        return res.data.data;
    });
}
function delFav(id) {
    return $n.delete(`api/article/favorites/my/${id}`);
}
export { hasFav, addFav, delFav };
