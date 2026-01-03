import IconCloud from "./ui/icon-cloud";

const slugs = [
	"aws",
	"docker",
	"kubernetes",
	"terraform",
	"ansible",
	"linux",
	"go",
  "csharp",
  "grafana",
  "prometheus",
  "elasticsearch",
  "Kibana",
  "cadvisor",
  "logstash",
	"typescript",
	"javascript",
	"postgresql",
	"git",
	"github",
	"visualstudiocode",
	"githubactions",
  "npm",
  "gitlabci"
];

export function IconCloudDemo() {
	return (
		<div className="relative h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 block md:hidden">
			<IconCloud iconSlugs={slugs} />
		</div>
	);
}
