window.BENCHMARK_DATA = {
  "lastUpdate": 1694042010386,
  "repoUrl": "https://github.com/awslabs/soci-snapshotter",
  "entries": {
    "Soci Benchmark": [
      {
        "commit": {
          "author": {
            "email": "arjunry@amazon.com",
            "name": "Arjun Yogidas"
          },
          "committer": {
            "email": "66654647+turan18@users.noreply.github.com",
            "name": "Yasin Turan",
            "username": "turan18"
          },
          "distinct": true,
          "id": "184d1715fe4985936018f8013dd81c54019ae4e4",
          "message": "Add benchmark visualization workflow\n\nThis commit changes the benchmark.yml workflow into\nbenchmark_visualization.yml. The new workflow runs on every code merge,\nit will run the benchmark target and upload the result as\nbenchmark-result-artifact. The results are then converted to the\nappropriate format for visualization using the\nvisualization_data_converter.sh shell script. It then uploads the newly\ngenerated data files to Github-pages using the github-action-benchmark\naction.\n\nSigned-off-by: Arjun Raja Yogidas <arjunry@amazon.com>",
          "timestamp": "2023-08-14T14:24:40-04:00",
          "tree_id": "4d49c9a79b3c29a9a58706a04dc54cbdfcd909e7",
          "url": "https://github.com/awslabs/soci-snapshotter/commit/184d1715fe4985936018f8013dd81c54019ae4e4"
        },
        "date": 1692038786558,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "SociFullECR-public-node-lazyTaskDuration",
            "value": 0.5555,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-localTaskDuration",
            "value": 0.486,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-pullTaskDuration",
            "value": 10.3095,
            "unit": "Seconds",
            "extra": "P90"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arjunry@amazon.com",
            "name": "Arjun Yogidas"
          },
          "committer": {
            "email": "66654647+turan18@users.noreply.github.com",
            "name": "Yasin Turan",
            "username": "turan18"
          },
          "distinct": true,
          "id": "184d1715fe4985936018f8013dd81c54019ae4e4",
          "message": "Add benchmark visualization workflow\n\nThis commit changes the benchmark.yml workflow into\nbenchmark_visualization.yml. The new workflow runs on every code merge,\nit will run the benchmark target and upload the result as\nbenchmark-result-artifact. The results are then converted to the\nappropriate format for visualization using the\nvisualization_data_converter.sh shell script. It then uploads the newly\ngenerated data files to Github-pages using the github-action-benchmark\naction.\n\nSigned-off-by: Arjun Raja Yogidas <arjunry@amazon.com>",
          "timestamp": "2023-08-14T14:24:40-04:00",
          "tree_id": "4d49c9a79b3c29a9a58706a04dc54cbdfcd909e7",
          "url": "https://github.com/awslabs/soci-snapshotter/commit/184d1715fe4985936018f8013dd81c54019ae4e4"
        },
        "date": 1692038786558,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "SociFullECR-public-node-lazyTaskDuration",
            "value": 0.5555,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-localTaskDuration",
            "value": 0.486,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-pullTaskDuration",
            "value": 10.3095,
            "unit": "Seconds",
            "extra": "P90"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "walster@amazon.com",
            "name": "Kern Walster",
            "username": "Kern--"
          },
          "committer": {
            "email": "66654647+turan18@users.noreply.github.com",
            "name": "Yasin Turan",
            "username": "turan18"
          },
          "distinct": true,
          "id": "8c6880c62279317ca0e66629f70f70ce99babcc5",
          "message": "Retain original cache.Get error in span manager\n\nBefore this change, the span manager would replace the error received\nfrom `m.cache.Get` with a generic `ErrSpanNotAvailable`. The way we use\nthe cache is really just as an abstraction of disk storage for span\ndata so we don't generally expect `m.cache.Get` to throw an error. If it\ndoes, we should keep that context.\n\nSigned-off-by: Kern Walster <walster@amazon.com>",
          "timestamp": "2023-08-16T18:01:03-04:00",
          "tree_id": "83d33914f5d563e4c644cfc16d06871653d1c13c",
          "url": "https://github.com/awslabs/soci-snapshotter/commit/8c6880c62279317ca0e66629f70f70ce99babcc5"
        },
        "date": 1692224210408,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "SociFullECR-public-node-lazyTaskDuration",
            "value": 0.4575,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-localTaskDuration",
            "value": 0.4325,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-pullTaskDuration",
            "value": 29.456,
            "unit": "Seconds",
            "extra": "P90"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "turyasin@amazon.com",
            "name": "Yasin Turan",
            "username": "turan18"
          },
          "committer": {
            "email": "kern.walster@gmail.com",
            "name": "Kern Walster",
            "username": "Kern--"
          },
          "distinct": true,
          "id": "d290e21d0a705c7cc530221a16dbc959eb3f2941",
          "message": "Deterministically close open span cache file descriptors\n\nThe snapshotter stores fetched spans in a cache either in memory\nor on disk. When reading from the cache on disk we use a Finalizer\nconstruct to close the open file descriptors when the Go garbage\ncollector sees that the fd is no longer being referenced. The issue with\nthis is that we don't have control over when the GC runs (although it's\npossible), and so the process could hold on too open fds for a unknown\namount of time causing a sort of leak. On systems where the snapshotter is\nbounded by a ulimit in the number of open files, this can cause the\nsnapshotter span cache get calls to fail, causing `file.Read` failures for the\nrunning container/process. This change wraps the readers returned by the\ncache in `io.ReadCloser`'s, so we can deterministically close the files\nonce the content has been read from them.\n\nSigned-off-by: Yasin Turan <turyasin@amazon.com>",
          "timestamp": "2023-08-18T16:01:10-07:00",
          "tree_id": "ce88584a4d3302fab09faff35dc07a43f4b0110d",
          "url": "https://github.com/awslabs/soci-snapshotter/commit/d290e21d0a705c7cc530221a16dbc959eb3f2941"
        },
        "date": 1692400664253,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "SociFullECR-public-node-lazyTaskDuration",
            "value": 0.4465,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-localTaskDuration",
            "value": 0.4125,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-pullTaskDuration",
            "value": 42.1225,
            "unit": "Seconds",
            "extra": "P90"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "arjunry@amazon.com",
            "name": "Arjun Yogidas"
          },
          "committer": {
            "email": "66654647+turan18@users.noreply.github.com",
            "name": "Yasin Turan",
            "username": "turan18"
          },
          "distinct": true,
          "id": "670edd50e7640c86af4e64120ac9b68da9914ffd",
          "message": "Update check_regreesion.sh file\n\nThis commit updates the regression check script to skip the initial\nvalue in all BenchmarkTimes array of the benchmark results json file to\ncalculate a new p90. We use this new p90 to identify regression, this\nchange was made to combat the skewed p90 metrics we were seeing due to\nthe slow starts of the benchmark pull times which were affecting the\noverall regression comparison. Skipping the first value allows us to\nhave a more uniform comparison, remove github environment noise and we'd\nbe able to identify true regression in our code.\n\nSigned-off-by: Arjun Raja Yogidas <arjunry@amazon.com>",
          "timestamp": "2023-08-22T13:27:16-04:00",
          "tree_id": "7e0bf34018e2cf82ac9a943db20cbeb7c4d2ece5",
          "url": "https://github.com/awslabs/soci-snapshotter/commit/670edd50e7640c86af4e64120ac9b68da9914ffd"
        },
        "date": 1692726129741,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "SociFullECR-public-node-lazyTaskDuration",
            "value": 0.5005,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-localTaskDuration",
            "value": 0.428,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-pullTaskDuration",
            "value": 14.485,
            "unit": "Seconds",
            "extra": "P90"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manujgrover71@gmail.com",
            "name": "Manuj Grover",
            "username": "manujgrover71"
          },
          "committer": {
            "email": "66654647+turan18@users.noreply.github.com",
            "name": "Yasin Turan",
            "username": "turan18"
          },
          "distinct": true,
          "id": "5a40aff504535a863e0655de76a77b058184cafc",
          "message": "Using standard error package instead of go-multierror for multierror error.\n\nSigned-off-by: Manuj Grover <manujgrover71@gmail.com>",
          "timestamp": "2023-08-22T15:49:08-04:00",
          "tree_id": "b3c836a33b9dbca10ef7d1afb88e4e343a05e9b3",
          "url": "https://github.com/awslabs/soci-snapshotter/commit/5a40aff504535a863e0655de76a77b058184cafc"
        },
        "date": 1692734801466,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "SociFullECR-public-node-lazyTaskDuration",
            "value": 0.583,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-localTaskDuration",
            "value": 0.5285,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-pullTaskDuration",
            "value": 11.931999999999999,
            "unit": "Seconds",
            "extra": "P90"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "walster@amazon.com",
            "name": "Kern Walster",
            "username": "Kern--"
          },
          "committer": {
            "email": "55555210+sondavidb@users.noreply.github.com",
            "name": "David Son",
            "username": "sondavidb"
          },
          "distinct": true,
          "id": "ec1e62326578318ace5048c487b7e155a068dd4b",
          "message": "Remove remote snapshot key from local mount logs\n\nIn an attempt to make it more clear when we aren't lazily loading\nlayers, we emit logs with a \"remote-snapshot-prepared\":\"false\" context.\nThis often happens when a layer doesn't have a ztoc.\n\nWhen we skipped lazy loading, we emitted a log saying that we skipped,\nbut we also emitted a confusing (and incorrect) message like:\n\n```\n{\"msg\":\"local snapshot successfully prepared\",\"remote-snapshot-prepared\":\"true\"}\n```\n\nThis could say \"remote-snapshot-prepared\":\"false\", but this change is\nmore clear because there is exactly 1 log line that contains the key per\nimage layer. By inspecting the logs, you can count how many layers\nweren't lazily loaded by counting the number of log lines with\n\"remote-snapshot-prepared\":\"false\".\n\nSigned-off-by: Kern Walster <walster@amazon.com>",
          "timestamp": "2023-08-28T12:15:51-07:00",
          "tree_id": "4e6fafff7a0e2e95bdf435130130c01496d85d8a",
          "url": "https://github.com/awslabs/soci-snapshotter/commit/ec1e62326578318ace5048c487b7e155a068dd4b"
        },
        "date": 1693251846537,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "SociFullECR-public-node-lazyTaskDuration",
            "value": 0.5660000000000001,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-localTaskDuration",
            "value": 0.5595,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-pullTaskDuration",
            "value": 48.379999999999995,
            "unit": "Seconds",
            "extra": "P90"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "turyasin@amazon.com",
            "name": "Yasin Turan",
            "username": "turan18"
          },
          "committer": {
            "email": "kern.walster@gmail.com",
            "name": "Kern Walster",
            "username": "Kern--"
          },
          "distinct": true,
          "id": "7cc04aff01bce06f3b1759cf1eecf4cebdeeb2cb",
          "message": "Fix integration test failures on non-x86\n\nThere were several issues that caused integration tests to fail\non non-x86. The first one was our dependency GHCR registry image which\nis only supported on amd64. The GHCR registry was needed when we supported artifact\nmanifests, but those have been seemingly removed from the OCI 1.1 spec proposal,\nso we no longer need it. We also had 2 tests that relied on a pinned amd64\nvariant of rabbitmq. Those have been replaced with a pinned multi-arch index.\n\nSigned-off-by: Yasin Turan <turyasin@amazon.com>",
          "timestamp": "2023-08-30T16:26:31-05:00",
          "tree_id": "455f1564db6ccfe97230840e05d49071744b1f72",
          "url": "https://github.com/awslabs/soci-snapshotter/commit/7cc04aff01bce06f3b1759cf1eecf4cebdeeb2cb"
        },
        "date": 1693431937338,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "SociFullECR-public-node-lazyTaskDuration",
            "value": 0.4555,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-localTaskDuration",
            "value": 0.409,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-pullTaskDuration",
            "value": 9.3865,
            "unit": "Seconds",
            "extra": "P90"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "walster@amazon.com",
            "name": "Kern Walster",
            "username": "Kern--"
          },
          "committer": {
            "email": "kern.walster@gmail.com",
            "name": "Kern Walster",
            "username": "Kern--"
          },
          "distinct": true,
          "id": "a1ec4dab790da07e9e29f94293a1f7338b38068d",
          "message": "Allow manually tirggering bump-deps on forks\n\nBy default, bump-deps doesn't run on forks since forks will generally\nget updates by rebasing on awslabs/soci-snapshotter. When making\nchanges to dump-deps.sh, however, we generally want to test on a fork\nbefore merging the change upstream. Before this change, users had to\ntemporarily enable the cron workflow on their fork to manually test,\nthen re-disable it before submitting a PR. With this change, you can\nmanually run bump-deps on a fork without any changes.\n\nSigned-off-by: Kern Walster <walster@amazon.com>",
          "timestamp": "2023-09-06T12:27:11-05:00",
          "tree_id": "4eb7da66d75b52564f688942e5d8dc2134fa8abe",
          "url": "https://github.com/awslabs/soci-snapshotter/commit/a1ec4dab790da07e9e29f94293a1f7338b38068d"
        },
        "date": 1694022252906,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "SociFullECR-public-node-lazyTaskDuration",
            "value": 0.4985,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-localTaskDuration",
            "value": 0.4285,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-pullTaskDuration",
            "value": 9.563500000000001,
            "unit": "Seconds",
            "extra": "P90"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "walster@amazon.com",
            "name": "Kern Walster",
            "username": "Kern--"
          },
          "committer": {
            "email": "kern.walster@gmail.com",
            "name": "Kern Walster",
            "username": "Kern--"
          },
          "distinct": true,
          "id": "53fb9d9960c929faf0b69260e79567e5c5323f02",
          "message": "Add TOC entry validation on first read\n\nThis change validates that when a file is read, the TOC entry is checked\nto be sure that it matches the TAR header in the image layer.\n\nSigned-off-by: Kern Walster <walster@amazon.com>",
          "timestamp": "2023-09-06T17:49:28-05:00",
          "tree_id": "ed569c30379a2e50121f3e34afe125c1852afc2e",
          "url": "https://github.com/awslabs/soci-snapshotter/commit/53fb9d9960c929faf0b69260e79567e5c5323f02"
        },
        "date": 1694042009888,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "SociFullECR-public-node-lazyTaskDuration",
            "value": 0.449,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-localTaskDuration",
            "value": 0.40349999999999997,
            "unit": "Seconds",
            "extra": "P90"
          },
          {
            "name": "SociFullECR-public-node-pullTaskDuration",
            "value": 38.9975,
            "unit": "Seconds",
            "extra": "P90"
          }
        ]
      }
    ]
  }
}