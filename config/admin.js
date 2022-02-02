module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd9732181b6748d4b225885a06c35ecff'),
  },
});
