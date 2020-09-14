(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{321:function(a,e,t){"use strict";t.r(e);var s=t(0),o=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"updating-smart-chain-software-from-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating-smart-chain-software-from-source"}},[a._v("#")]),a._v(" Updating Smart Chain Software From Source")]),a._v(" "),t("h2",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" Linux")]),a._v(" "),t("p",[a._v("To update your compiled "),t("code",[a._v("komodod")]),a._v(" daemon, follow the steps below carefully. For each step, do not proceed to the next step until the current step is fully complete.")]),a._v(" "),t("p",[a._v("You may leave the "),t("code",[a._v("komodod")]),a._v(" daemon running, if necessary, and if your machine has sufficient resources.")]),a._v(" "),t("p",[a._v("Alternatively, you may stop the daemon by executing "),t("code",[a._v("~/komodo/src/komodo-cli stop")]),a._v(".")]),a._v(" "),t("h4",{attrs:{id:"navigate-to-your-komodo-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigate-to-your-komodo-directory"}},[a._v("#")]),a._v(" Navigate to your komodo directory")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/komodo\n")])])]),t("h4",{attrs:{id:"reset-your-local-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reset-your-local-repository"}},[a._v("#")]),a._v(" Reset Your Local Repository")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset --hard\n")])])]),t("h4",{attrs:{id:"clean-the-source-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clean-the-source-directory"}},[a._v("#")]),a._v(" Clean the Source Directory")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean\n")])])]),t("h4",{attrs:{id:"update-your-local-source-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-your-local-source-code"}},[a._v("#")]),a._v(" Update Your Local Source Code")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull\n")])])]),t("h4",{attrs:{id:"compile-the-latest-komodo-binary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compile-the-latest-komodo-binary"}},[a._v("#")]),a._v(" Compile the Latest Komodo Binary")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./zcutil/build.sh -j"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("nproc"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),t("h4",{attrs:{id:"restart-the-komodod-daemon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#restart-the-komodod-daemon"}},[a._v("#")]),a._v(" Restart the komodod Daemon")]),a._v(" "),t("p",[a._v("Start your services as usual.")]),a._v(" "),t("p",[a._v("(If you did not stop the daemon before compiling, stop the daemon using "),t("code",[a._v("~/komodo/src/komodo-cli stop")]),a._v(" and start the daemon again.)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("~/komodo/src/komodod "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),t("h4",{attrs:{id:"rapid-update-method"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rapid-update-method"}},[a._v("#")]),a._v(" Rapid Update Method")]),a._v(" "),t("p",[a._v("The steps below can often be used to update the daemon.")]),a._v(" "),t("p",[a._v("These steps take a lesser amount of time, but they may occasionally produce an error during compilation. If the steps below do not succeed, the compiler will cease and return an error. When this happens, simply switch to the update steps listed above.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/komodo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout dev\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -j"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("nproc"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),t("h2",{attrs:{id:"macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[a._v("#")]),a._v(" MacOS")]),a._v(" "),t("p",[a._v("To update your compiled "),t("code",[a._v("komodod")]),a._v(" daemon, follow the steps below carefully. For each step, do not proceed to the next step until the current step is fully complete.")]),a._v(" "),t("p",[a._v("You may leave the "),t("code",[a._v("komodod")]),a._v(" daemon running, if necessary, and if your machine has sufficient resources.")]),a._v(" "),t("p",[a._v("Alternatively, you may stop the daemon by executing "),t("code",[a._v("~/komodo/src/komodo-cli stop")]),a._v(".")]),a._v(" "),t("h4",{attrs:{id:"navigate-to-your-komodo-directory-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#navigate-to-your-komodo-directory-2"}},[a._v("#")]),a._v(" Navigate to your komodo directory")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/komodo\n")])])]),t("h4",{attrs:{id:"reset-your-local-repository-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reset-your-local-repository-2"}},[a._v("#")]),a._v(" Reset Your Local Repository")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" reset --hard\n")])])]),t("h4",{attrs:{id:"clean-the-source-directory-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clean-the-source-directory-2"}},[a._v("#")]),a._v(" Clean the Source Directory")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean\n")])])]),t("h4",{attrs:{id:"update-your-local-source-code-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-your-local-source-code-2"}},[a._v("#")]),a._v(" Update Your Local Source Code")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull\n")])])]),t("h4",{attrs:{id:"compile-the-latest-komodo-binary-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compile-the-latest-komodo-binary-2"}},[a._v("#")]),a._v(" Compile the Latest Komodo Binary")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./zcutil/build.sh -j8\n")])])]),t("h4",{attrs:{id:"restart-the-komodod-daemon-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#restart-the-komodod-daemon-2"}},[a._v("#")]),a._v(" Restart the komodod Daemon")]),a._v(" "),t("p",[a._v("Start your services as usual.")]),a._v(" "),t("p",[a._v("(If you did not stop the daemon before compiling, stop the daemon using "),t("code",[a._v("~/komodo/src/komodo-cli stop")]),a._v(" and start the daemon again.)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("~/komodo/src/komodod "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])])]),t("h4",{attrs:{id:"rapid-update-method-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rapid-update-method-2"}},[a._v("#")]),a._v(" Rapid Update Method")]),a._v(" "),t("p",[a._v("The steps below can often be used to update the daemon.")]),a._v(" "),t("p",[a._v("These steps take a lesser amount of time, but they may occasionally produce an error during compilation. If the steps below do not succeed, the compiler will cease and return an error. When this happens, simply switch to the update steps listed above.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/komodo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout dev\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -j8\n")])])]),t("h2",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),t("p",[a._v("To update the Windows software, you will again need access to your available installation of Linux where you originally compiled the software.")]),a._v(" "),t("h4",{attrs:{id:"build-the-new-executables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-the-new-executables"}},[a._v("#")]),a._v(" Build the New Executables")]),a._v(" "),t("p",[a._v("Execute the following commands on your Linux machine to build the new executable files.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/komodo\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull\n./zcutil/build-win.sh -j8\n")])])]),t("p",[a._v("This can take some time.")]),a._v(" "),t("h4",{attrs:{id:"move-executables-to-windows-os"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#move-executables-to-windows-os"}},[a._v("#")]),a._v(" Move Executables to Windows OS")]),a._v(" "),t("p",[a._v("Once the process completes, find the "),t("code",[a._v("komodod.exe")]),a._v(" and "),t("code",[a._v("komodo-cli.exe")]),a._v(" files and move them to your Windows OS machine.")]),a._v(" "),t("p",[a._v("You may drop these executable files into the same "),t("code",[a._v("kmd")]),a._v(" folder to overwrite the old executables files.")]),a._v(" "),t("p",[a._v("Once complete, run the "),t("code",[a._v("komodod.exe")]),a._v(" and "),t("code",[a._v("komodo-cli.exe")]),a._v(" files to verify that they work properly.")])])}),[],!1,null,null,null);e.default=o.exports}}]);