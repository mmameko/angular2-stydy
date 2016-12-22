var gulp = require("gulp"),
	ts = require("gulp-typescript"),
	bs = require("browser-sync"),
	watch = require("gulp-watch");

var path = {
	src: {
		ts: "src/ts/**/*.ts"
	},
	build: {
		js: "build/js/"
	},
	watch: {
		ts: "src/ts/**/*.ts"
	}
};

var config = {
	server: {
		baseDir: "./"
	},
	host: 'localhost',
    port: 9000,
};

gulp.task("build", function(){
	gulp.start("ts:compile");
});

gulp.task("webserver", function(){
	bs(config);
});

gulp.task("watch", function(){
	watch(path.watch.ts, function(){
		gulp.start("ts:compile");
	});	
});

gulp.task("ts:compile", function(){
    var tsProj = ts.createProject("tsconfig.json");

	gulp.src(path.src.ts)
        .pipe(tsProj())
        .pipe(gulp.dest(path.build.js))
		.pipe(bs.reload({ stream: true }));
});

gulp.task("default", [ "webserver", "build", "watch" ]);