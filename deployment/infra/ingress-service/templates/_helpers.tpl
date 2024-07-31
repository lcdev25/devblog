{{- define "nginx-ingress.name" -}}
{{- printf "%s-%s" .Release.Name .Chart.Name -}}
{{- end -}}

{{- define "nginx-ingress.fullname" -}}
{{- printf "%s-%s" .Release.Namespace (include "nginx-ingress.name" .) -}}
{{- end -}}
