import IconCloud from "../ui/icon-cloud";

const slugs = [
	"docker",
	"kubernetes",
	"terraform",
	"ansible",
	"linux",
	"go",
  "grafana",
  "prometheus",
  "elasticsearch",
  "logstash",
	"typescript",
	"javascript",
	"postgresql",
	"git",
	"github",
	"githubactions",
  "npm",
];

export function IconCloudDemo() {
	return (
		<div className="relative h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 block md:hidden">
			<IconCloud iconSlugs={slugs} />
		</div>
	);
}
