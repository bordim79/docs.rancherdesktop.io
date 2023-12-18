---
title: "命令参考：rdctl"
---

`rdctl` 是包含在 Rancher Desktop 中的命令行工具，它能让你通过命令行访问 GUI 功能。`rdctl` 旨在帮助用户完成脚本（用于自动化、CI/CD）、故障排除、远程管理等任务。当前版本的 `rdctl` 支持以下命令（即将发布的版本中将支持更多命令）：

:::info

由于当前版本的 `rdctl` 是实验性的，因此所有子命令的名称、参数以及它们的输出可能会改变。

:::

:::caution 警告

Rancher Desktop 应用程序必须为以下命令运行：

<details>
<summary>命令列表</summary>

* rdctl list-settings
* rdctl set
* rdctl shutdown

</details>
:::

:::note

很多 `rdctl` 命令都有对应的 `API` 调用。下面列出了两种格式的可用命令。`api` 示例假定你使用 `curl` 作为与 API 对话的工具。

:::

## rdctl 或 rdctl help

运行 `rdctl` 或 `rdctl help` 查看可用命令的列表：

<details>
<summary>示例输出</summary>

```autoupdate=true
> rdctl help
The eventual goal of this CLI is to enable any UI-based operation to be done from the command-line as well.

Usage:
  rdctl [command]

Available Commands:
  api           Run API endpoints directly
  completion    Generate the autocompletion script for the specified shell
  factory-reset Clear all the Rancher Desktop state and shut it down.
  help          Help about any command
  list-settings Lists the current settings.
  set           Update selected fields in the Rancher Desktop UI and restart the backend.
  shell         Run an interactive shell or a command in a Rancher Desktop-managed VM
  shutdown      Shuts down the running Rancher Desktop application
  start         Start up Rancher Desktop, or update its settings.
  version       Shows the CLI version.

Flags:
      --config-path string   config file (default /Users/jan/Library/Application Support/rancher-desktop/rd-engine.json)
  -h, --help                 help for rdctl
      --host string          default is localhost; most useful for WSL
      --password string      overrides the password setting in the config file
      --port string          overrides the port setting in the config file
      --user string          overrides the user setting in the config file

Use "rdctl [command] --help" for more information about a command.
```

</details>

## rdctl api

运行 `rdctl api /` 全局列出所有端点：

<details>
<summary>示例输出</summary>

```autoupdate=true
$ rdctl api / | jq -r .[]
GET /
GET /v0
GET /v1
GET /v1/about
GET /v1/diagnostic_categories
GET /v1/diagnostic_checks
POST /v1/diagnostic_checks
GET /v1/diagnostic_ids
PUT /v1/factory_reset
PUT /v1/propose_settings
GET /v1/settings
PUT /v1/settings
PUT /v1/shutdown
GET /v1/transient_settings
PUT /v1/transient_settings
```

</details>

## rdctl api /vX

运行 `rdctl api /v1` 列出版本 1 中的所有端点：

<details>
<summary>示例输出</summary>

```autoupdate=true
$ rdctl api /v1 | jq -r .[]
GET /v1
GET /v1/about
GET /v1/diagnostic_categories
GET /v1/diagnostic_checks
POST /v1/diagnostic_checks
GET /v1/diagnostic_ids
PUT /v1/factory_reset
PUT /v1/propose_settings
GET /v1/settings
PUT /v1/settings
PUT /v1/shutdown
GET /v1/transient_settings
PUT /v1/transient_settings
```

</details>

## rdctl api /v0/settings

`rdctl api [endpoints]` 是对直接使用 API 的用户最有用的命令，因此它们不适合像 `rdctl set` 一样日常使用。例如：

以下命令

```
rdctl api /v0/settings --method PUT --body '{"kubernetes": {"enabled": false}}'
```

与以下命令是一样的：

```
rdctl set --kubernetes-enabled=false
```

只是它没那么简洁和用户友好。

## rdctl create-profile

以 macOS `.plist` 或 Windows `.reg` 格式为 Rancher Desktop 设置生成部署配置文件。

```console
rdctl create-profile <options> <options-input>
```

<details>
<summary>选项和示例命令</summary>

**选项**

```console
--input [FILE]              File containing a JSON document.
--body [JSON]               Command-line option containing a JSON document
--from-settings             Use current settings.
--output [plist, reg]       An output of .plist files for macOS and .reg files for Windows.

Additional options for --output reg:
--type [locked, defaults]   The locked field is set as default, otherwise the default type can be specified.
--hive [hklm, hkcu]         The hklm field is set as default, otherwise hkcu can be specified.
```

**示例**

```console
rdctl create-profile --output reg --hive=Hkcu --from-settings
```

</details>

## rdctl extension install

安装 Rancher Desktop 扩展。

```
rdctl extension install <image-id>
```

<details>
<summary>选项 &amp; 示例输出</summary>

**选项**

```
--force               Avoids any interactivity.
<image-id>:<tag>      The <tag> is optional, e.g. splatform/epinio-docker-desktop:latest.
```

**示例**

```autoupdate=true
$ rdctl extension install docker/logs-explorer-extension:0.2.2
Installing image docker/logs-explorer-extension:0.2.2
```

</details>

## rdctl extension ls

列出当前安装的镜像。

```
rdctl extension ls
```

<details>
<summary>示例输出</summary>

**示例**

```autoupdate=true
$ rdctl extension ls
Extension IDs

docker/logs-explorer-extension:0.2.2
```

</details>

## rdctl extension uninstall

卸载 Rancher Desktop 扩展。

```
rdctl extension uninstall <image-id>
```

<details>
<summary>选项 &amp; 示例输出</summary>

**选项**

```
<image-id>:<tag>      The <tag> is optional, e.g. splatform/epinio-docker-desktop:latest.
```

**示例**

```autoupdate=true
$ rdctl extension uninstall docker/logs-explorer-extension:0.2.2
Uninstalling image docker/logs-explorer-extension:0.2.2: Deleted docker/logs-explorer-extension:0.2.2
```

</details>

## rdctl list-settings

<Tabs groupId="command-reference">
  <TabItem value="CLI" default>

运行 `rdctl list-settings` 以查看当前的活动配置：

<details>
<summary>选项 &amp; 示例输出</summary>

**选项**

```autoupdate=true
> rdctl list-settings --help
Lists the current settings in JSON format.

Usage:
  rdctl list-settings [flags]

Flags:
  -h, --help   help for list-settings

Global Flags:
      --config-path string   config file (default /Users/{username}/Library/Application Support/rancher-desktop/rd-engine.json)
      --host string          default is localhost; most useful for WSL
      --password string      overrides the password setting in the config file
      --port string          overrides the port setting in the config file
      --user string          overrides the user setting in the config file
```

**示例**

```autoupdate=true
> rdctl list-settings
{
  "version": 6,
  "application": {
    "adminAccess": false,
    "pathManagementStrategy": "rcfiles",
    "updater": {
      "enabled": false
    },
    "debug": false,
    "telemetry": {
      "enabled": true
    },
    "autoStart": false,
    "startInBackground": false,
    "hideNotificationIcon": false,
    "window": {
      "quitOnClose": false
    }
  },
  "virtualMachine": {
    "memoryInGB": 6,
    "numberCPUs": 2,
    "hostResolver": true
  },
  "WSL": {
    "integrations": {}
  },
  "containerEngine": {
    "allowedImages": {
      "enabled": false,
      "patterns": [
        "docker.io"
      ]
    },
    "name": "moby"
  },
  "kubernetes": {
    "version": "",
    "port": 6443,
    "enabled": false,
    "options": {
      "traefik": true,
      "flannel": true
    },
    "ingress": {
      "localhostOnly": false
    }
  },
  "portForwarding": {
    "includeKubernetesServices": false
  },
  "images": {
    "showAll": true,
    "namespace": "k8s.io"
  },
  "diagnostics": {
    "showMuted": false,
    "mutedChecks": {}
  },
  "experimental": {
    "virtualMachine": {
      "type": "qemu",
      "useRosetta": false,
      "socketVMNet": false,
      "mount": {
        "type": "reverse-sshfs",
        "9p": {
          "securityModel": "none",
          "protocolVersion": "9p2000.L",
          "msizeInKB": 128,
          "cacheMode": "mmap"
        }
      },
      "networkingTunnel": false
    }
  },
  "extensions": {
    "docker/logs-explorer-extension:0.2.2": true
  }
}

```

</details>

</TabItem>
  <TabItem value="API" default>

调用以下 API 以查看当前的活动配置：

<details>
<summary>示例输出</summary>

```
curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -X GET
```

</details>

**注意**：`-X GET` 是可选的。你也可以单独使用前面的命令。

</TabItem>
</Tabs>

## rdctl set

<Tabs groupId="command-reference">
  <TabItem value="CLI" default>

运行 `rdctl set [flags]` 来设置属性。在大多数情况下，Kubernetes 会在运行 `set` 命令时重置。你可以通过在单个命令中使用链接来设置多个属性。下面是一些参考示例：

<details>
<summary>示例输出</summary>

```
> rdctl set --kubernetes-enabled=false
> rdctl set --container-engine docker --kubernetes-version 1.21.2
```

</details>

</TabItem>
  <TabItem value="API" default>

调用以下 API 来设置属性：

<details>
<summary>示例输出</summary>

```
curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/settings -d '{ "kubernetes": { "containerEngine": "docker", "enabled": false, "version":"1.23.5" }}' -X PUT
```

</details>

</TabItem>
</Tabs>

## rdctl shutdown

<Tabs groupId="command-reference">
  <TabItem value="CLI" default>

运行 `rdctl shutdown` 来正常关闭 Rancher Desktop：

<details>
<summary>示例输出</summary>

```
> rdctl shutdown
Shutting down.
```
</details>

</TabItem>
  <TabItem value="API" default>

调用以下 API 来关闭 Rancher Desktop：

<details>
<summary>示例输出</summary>

```
shutdown: curl -s -H "Authorization: Basic $AUTH" http://localhost:6107/v0/shutdown -X PUT
```

</details>

</TabItem>
</Tabs>

## rdctl start

<Tabs groupId="command-reference">
  <TabItem value="CLI" default>

运行 `rdctl start` 来确保 Rancher Desktop 按照要求运行和配置：

<details>
<summary>选项和示例命令</summary>

**选项**：

```console
Usage:
  rdctl start [flags]

Flags:
      --application.admin-access                                        enable privileged operations
      --application.auto-start                                          start app when logging in
      --application.debug                                               generate more verbose logging
      --application.hide-notification-icon                              don't show notification icon
      --application.path-management-strategy string                     update PATH to include ~/.rd/bin (allowed values: [manual, rcfiles])
      --application.start-in-background                                 start app without window
      --application.telemetry.enabled                                   allow collection of anonymous statistics
      --application.updater.enabled                                     automatically update to the latest release
      --application.window.quit-on-close                                terminate app when the main window is closed
      --container-engine.allowed-images.enabled                         only allow images to be pulled that match the allowed patterns
      --container-engine.name string                                    set engine (allowed values: [containerd, docker, moby])
      --diagnostics.show-muted                                          unhide muted diagnostics
      --experimental.virtual-machine.mount.9p.cache-mode string         (allowed values: [none, loose, fscache, mmap])
      --experimental.virtual-machine.mount.9p.msize-in-kib int          maximum packet size
      --experimental.virtual-machine.mount.9p.protocol-version string   (allowed values: [9p2000, 9p2000.u, 9p2000.L])
      --experimental.virtual-machine.mount.9p.security-model string     (allowed values: [passthrough, mapped-xattr, mapped-file, none])
      --experimental.virtual-machine.mount.type string                  how directories are shared (allowed values: [reverse-sshfs, 9p, virtiofs])
      --experimental.virtual-machine.socket-vmnet                       use socket-vmnet instead of vde-vmnet
      --experimental.virtual-machine.type string                        (allowed values: [qemu, vz])
      --experimental.virtual-machine.use-rosetta
      -h, --help                                                        help for start
      --images.namespace string                                         select only images from this namespace (containerd only)
      --images.show-all                                                 show system images on Images page
      --kubernetes.enabled                                              run Kubernetes
      --kubernetes.options.flannel                                      use flannel networking; disable to install your own CNI
      --kubernetes.options.traefik                                      install and run traefik
      --kubernetes.port int                                             apiserver port
      --kubernetes.version string                                       choose which version of Kubernetes to run
      --no-modal-dialogs                                                avoid displaying dialog boxes
      -p, --path string                                                 path to main executable
      --port-forwarding.include-kubernetes-services                     show Kubernetes system services on Port Forwarding page
      --virtual-machine.memory-in-gb int                                reserved RAM size
      --virtual-machine.number-cpus int                                 reserved number of CPUs

Global Flags:
      --config-path string   config file (default /Users/{username}/Library/Application Support/rancher-desktop/rd-engine.json)
      --host string          default is localhost; most useful for WSL
      --password string      overrides the password setting in the config file
      --port string          overrides the port setting in the config file
      --user string          overrides the user setting in the config file
```

**示例**：

```console
> rdctl start --container-runtime dockerd -- kubernetes-version 1.19.3
```

</details>

</TabItem>
  <TabItem value="API" default>

调用以下 API 来确保 Rancher Desktop 按照要求运行和配置，请填写你的用户和密码：

<details>
<summary>示例输出</summary>

```
curl -s -H "Authorization: Basic $(echo -n "user:PASSWORD" | base64)"
```

</details>

</TabItem>
</Tabs>

## rdctl version

运行 `rdctl version` 来查看当前 rdctl CLI 的版本：

<details>
<summary>示例输出</summary>

```autoupdate=true
> rdctl version
rdctl client version: 1.1.0, targeting server version: v1
```

</details>
